---
title: 使用 Atomics API 实现互斥锁
---

::: tip 原文链接
[v8.dev](https://v8.dev/features/atomics)
:::

[[toc]]

### Atomics API介绍
`Atomics.wait` 和 `Atomics.notify` 是两个很有用的低层级(`low-level`)的同步原语(`synchronization primitives`)，可以用来实现互斥锁(`mutex`)和其他方式的同步。
值得注意的是， `Atomics.wait`是会产生阻塞的，所以就不能在主线程上调用该方法（强行使用会抛出`TypeError`）。  

从`8.7`版本开始，`V8`提供了一个非阻塞的方法`Atomics.waitAsync`，可以用在主线程。  

接下来我们将讲解如何实现一个互斥锁（既可以同步用于`worker`线程，也可以异步用于`主线程`）

`Atomics.wait` 和 `Atomics.waitAsync` 接受下列的参数：

`buffer`: 一个基于 `SharedArrayBuffer` 的 `Int32Array` 或 `BigInt64Array`。  
`index`: `buffer`内的一个有效索引值。   
`expectedValue`: 我们期望出现在 `(buffer, index)` 描述的内存位置上的值。  
`timeout`: 以毫秒为单位的超时(可选，默认为 `Infinity`)。

`Atomics.wait`的返回值是一个`string`, 如果指定的内存位置上的值不是`expectedValue`，`Atomics.wait`会立即返回`not-equal`,
否则，调用该方法的线程会被阻塞，直到另外一个线程在同一个内存位置上调用了`Atomics.notify`，或者`timeout`指定的时间到了。
前一种情况下`Atomics.wait`的返回值是`ok`,后一种情况的返回值是`timed-out`。

`Atomics.notify` 接受下列的参数:  

`buffer`: 一个基于 `SharedArrayBuffer` 的 `Int32Array` 或 `BigInt64Array` 。  
`index`: `buffer`内的一个有效索引值。  
`count`: 要通知多少等待者(`waiters`)（可选，默认为 `Infinity`）。  

该方法将会以`FIFO`的顺序通知`count`个数量的等待者（`waiters`），`waiters`在`(buffer, index)`内存位置上调用了`wait`等方法。

同一内存位置上调用了`wait`或`waitAsync`方法的等待者，都将在同一个`FIFO`队列中等待唤醒  

与`Atomics.wait`相反，`Atomics.waitAsync`方法总是立即返回，返回值如下所示：  

1. `{ async: false, value: 'not-equal' }` (如果指定的内存位置上不是期待值)
2. `{ async: false, value: 'timed-out' }` (只有当timeout为`0`时)
3. `{ async: true, value: promise }`  

第三种情况下返回的`promise`将在之后被`resolve`, `resolve`的值可能有`ok`(如果`Atomics.notify`在同一内存位置上被调用)，`timed-out`(如果超过了`timeout`指定的时间)，
这个promise不会被rejected

下面的例子展示了`Atomics.waitAsync`的基本用法：
```javascript
const sab = new SharedArrayBuffer(16);
const i32a = new Int32Array(sab);
const result = Atomics.waitAsync(i32a, 0, 0, 1000);
//                                     |  |  ^ timeout (opt)
//                                     |  ^ expected value
//                                     ^ index

if (result.value === 'not-equal') {
    // The value in the SharedArrayBuffer was not the expected one.
} else {
    result.value instanceof Promise; // true
    result.value.then(
        (value) => {
            if (value == 'ok') { /* notified */ }
            else { /* value is 'timed-out' */ }
        });
}

// In this thread, or in another thread:
Atomics.notify(i32a, 0);
```

### 实现一个互斥锁
接下来，我们将讨论如何实现一个既可以同步又可以异步的互斥锁。
我们不会使用`timeout`这个参数，这个参数可以在实现条件变量（`condition variables`）的时候再使用。

互斥锁通过操作`SharedArrayBuffer`实现了下面三个方法：

1. lock — 阻塞线程，直到我们能够获得互斥锁（只能在`worker`线程上使用）  
2. unlock — 释放互斥锁
3. executeLocked(callback) — 非阻塞锁，可供主线程使用，在获得锁后执行回调函数

具体实现如下，构造函数接收一个`SharedArrayBuffer`, 并初始化一个`Int32Array`。
```typescript
class AsyncLock {
    static INDEX = 0;
    static UNLOCKED = 0;
    static LOCKED = 1;
    
    constructor(sab: SharedArrayBuffer) {
        this.sab = sab;
        this.i32a = new Int32Array(sab);
    }
    
    lock() {
    /* … */
    }
    
    unlock() {
    /* … */
    }
    
    executeLocked(f) {
    /* … */
    }
}
```
i32a[0]的值要么是`LOCKED`， 要么是`UNLOCKED`。它也会被用于指定`Atomics.wait` 和 `Atomics.waitAsync`方法去`wait`的内存位置。  

互斥锁需要保证下列的不变性关系:  
如果i32a[0] == LOCKED，并且有一个线程在等待（无论是通过`Atomics.wait`还是`Atomics.waitAsync`）i32a[0]上指定的值，它最终**必须**要收到通知（`be notified`）。  
在收到通知后，线程将会尝试获取锁。如果成功获取到锁，它**必须**在释放锁后再次发出通知。

### 同步上锁和解锁
接下来展示的是可以在`worker`线程中调用的阻塞性锁

```javascript
function lock() {
    while (true) {
        const oldValue = Atomics.compareExchange(this.i32a, AsyncLock.INDEX,
                                    /* old value >>> */  AsyncLock.UNLOCKED,
                                    /* new value >>> */  AsyncLock.LOCKED);
        if (oldValue == AsyncLock.UNLOCKED) {
            return;
        }
        Atomics.wait(this.i32a, AsyncLock.INDEX,
                        AsyncLock.LOCKED); // <<< expected value at start
    }
}
```
当一个线程调用`lock()`时，它首先尝试通过使用`Atomics.compareExchange`将锁状态从`UNLOCKED`更改为`LOCKED`来获取锁。  

`Atomics.compareExchange` 会尝试以原子操作的形式(`atomically`)进行状态更改，并返回指定内存位置上的原始值。
如果原始值是 `UNLOCKED`，我们就知道状态改变成功，并且该线程成功获得了锁。其他就不需要再做什么了。

如果`Atomics.compareExchange`无法更改锁状态，则必然有另一个线程正在持有锁。
因此，该线程使用`Atomics.wait`以等待另一个线程释放锁。

如果内存位置上仍是预期值（在本例中为 `AsyncLock.LOCKED`），则 `Atomics.wait` 方法将会阻塞该线程，
并且仅当另一个线程调用 `Atomics.notify` 时，`Atomics.wait` 调用才会返回。

`unlock`方法则是将锁设置为 `UNLOCKED` 状态并调用 `Atomics.notify` 唤醒一个正在等待锁的等待者(`waiter`)。
这样的状态更改不应该失败，因为调用这个方法的线程必然持有锁，同时其他人不能也不应该调用 `unlock()`。
```javascript
function unlock() {
    const oldValue = Atomics.compareExchange(this.i32a, AsyncLock.INDEX,
    /* old value >>> */  AsyncLock.LOCKED,
    /* new value >>> */  AsyncLock.UNLOCKED);
    if (oldValue != AsyncLock.LOCKED) {
    throw new Error('Tried to unlock while not holding the mutex');
    }
    Atomics.notify(this.i32a, AsyncLock.INDEX, 1);
}
```
大部分情况下应该是这样的：  
锁是空闲的，线程 `T1` 通过使用 `Atomics.compareExchange` 更改锁状态来获取它。线程 `T2` 尝试通过调用 `Atomics.compareExchange` 来获取锁，但没有成功。然后`T2`调用 `Atomics.wait`，它会阻塞`T2`线程。

在之后的某个时刻，`T1` 释放锁并调用 `Atomics.notify`。这使得 `T2` 中的 `Atomics.wait` 调用返回`ok`，唤醒了 `T2`线程。然后 `T2` 再次尝试获取锁，这次成功了。

此外还有2种可能的极端情况:  

情况1. `T1` 持有锁，`T2` 尝试获取它。首先，`T2` 尝试使用 `Atomics.compareExchange` 更改锁定状态，但没有成功。
但随后 `T1` 在 `T2` 调用 `Atomics.wait` 之前就释放了锁。当 `T2` 调用 `Atomics.wait` 时，它会立即返回值 `not-equal`。在这种情况下，`T2` 将继续下一次循环迭代，尝试再次获取锁。

情况2. `T1` 持有锁，`T2` 使用 `Atomics.wait` 等待它。 `T1 `释放锁 —— `T2` 被唤醒（`Atomics.wait` 调用返回）并尝试执行 `Atomics.compareExchange` 以获取锁，
但另一个线程 `T3` 在`T2`之前就已经获取了锁（可能是运行更快等原因）。因此`T2`对 `Atomics.compareExchange` 的调用未能获得锁，`T2` 再次调用 `Atomics.wait`，阻塞直到 `T3` 释放锁。

由于后一种情况，互斥锁并不“公平”，有可能 `T2` 一直在等待释放锁，但 `T3` 来了就马上拿到了锁。一个在实现上更好的锁可能会使用多种状态来区分“锁定”和“竞争锁定”。

### 异步上锁
与阻塞性的`lock`等方法不同的是，非阻塞性的`executeLocked`方法可以被主线程调用。它获取一个回调函数作为其唯一参数，并在成功获取锁后执行回调函数。

```javascript
function executeLocked(f) {
    const self = this;
    
    async function tryGetLock() {
        while (true) {
            const oldValue = Atomics.compareExchange(self.i32a, AsyncLock.INDEX,
                                        /* old value >>> */  AsyncLock.UNLOCKED,
                                        /* new value >>> */  AsyncLock.LOCKED);
            if (oldValue == AsyncLock.UNLOCKED) {
                f();
                self.unlock();
                return;
            }
            const result = Atomics.waitAsync(self.i32a, AsyncLock.INDEX,
                                                        AsyncLock.LOCKED);
                                                        //  ^ expected value at start
            await result.value;
        }
    }
    
    tryGetLock();
}
```
内部函数 `tryGetLock` 先尝试使用 `Atomics.compareExchange` 获取锁。 如果成功改变了锁状态，它将执行回调，释放锁，然后返回。

如果 `Atomics.compareExchange` 获取锁失败，我们需要在锁可能空闲时重试。 
我们不能阻塞并等待锁释放 —— 相反，我们使用 `Atomics.waitAsync` 和它返回的 `Promise` 来进行新的尝试。

如果我们调用了 `Atomics.waitAsync`，当持有锁的线程执行 `Atomics.notify` 时，返回的 `Promise` 将会被resolve。 然后等待锁的线程尝试再次获取锁，就像以前一样。

同样的极端情况（在 `Atomics.compareExchange` 调用和 `Atomics.waitAsync` 调用之间释放锁，以及在 `Promise` resolve 和 `Atomics.compareExchange`调用之间再次获取锁）在这里也是存在的，
所以，代码必须以稳健(`robust`)的方式处理它们。

