---
title: 实现一个 Promise
---
## 什么是Promise A+ 规范
Promise A+规范是由Promises/A+ organization提出的一个Promise then方法的实现标准，需要注意的是，这份标准并未对如何创建、resolve、reject Promise做出规定

### 1. 术语和概念
|名词|含义|
|--|--|
|promise|promise指一个拥有then方法的对象或函数, 且then方法的功能和表现与本规范一致|
|thenable|一个定义了then方法的对象或函数|
|value|是一个任何可能的JS值，包括但不限于undefined, thenable,以及promise|
|exception|指一个被throw语句抛出的值(value)|
|reason|指一个值(value) 这个值指明了为什么一个promise状态变为了rejected|

### 2. 规范要求
   - 2.1  Promise的三种状态
      一个promise总是且仅可能处于以下三种状态中的一种：`pending`, `fulfilled`, 或`rejected`
      - 2.1.1 当一个promise处于`pending`状态时，可以转变为`fulfilled`状态或`rejected`状态
      - 2.1.2 当一个promise处于`fulfilled`状态时，状态不能再发生任何改变，且必须拥有一个不可变的`value`
      - 2.1.3 当一个promise处于`rejected`状态时，状态不能再发生任何改变，且必须拥有一个不可变的`reason`

::: tip
不可变的标准是使用 === 判断的结果为true， 但对于对象、数组等引用类型的内容是否可以发生变化，标准并未说明
可以理解为一个使用const 声明的变量
:::

   - 2.2  then方法
      一个promise必须提供一个then方法，使用此方法可以访问到它当前(promise已经resolve或rejected)或最终的(promise目前还在pending阶段)`value`或`reason`
      then方法应接收两个参数，分别为`onFulfilled`, `onRejected`
```javascript
promise.then(onFulfilled, onRejected)
```
这两个参数都是可选参数(使用TS书写时，参数类型应该为any)，根据标准，当这两个参数不是函数的时候，必须被忽略
      
- 2.2.1 如果`onFulfilled`是一个函数
  * 2.2.2.1 它必须在promise被`resolve`之后，也就是状态变为`fulfilled`之后调用，且promise的`value`将作为第一个参数传入`onFulfilled`中
  
   * 2.2.2.2 它绝对不能在promise被`resolve`之前调用
  
* 2.2.2.3 它绝对不能被调用超过一次
  
- 2.2.3 `onRejected`情况类似 不再赘述

- 2.2.4 `onFulfilled`和`onRejected`应该异步执行

::: tip 原文如下
onFulfilled or onRejected must not be called until the execution context stack contains only platform code
:::


   * 2.2.5 `onFulfilled`和`onRejected`必须作为函数被调用

   * 2.2.6 同一个promise的then函数可能且可以被调用多次

      * 2.2.6.1 如果promise已经`resolve`或被`resolve`时，所有`onFulfilled`回调都必须按照其挂载顺序执行

   * 2.2.7 then方法必须返回一个promise (注：标准并未说明要返回的promise是一个新的promise，所以简易版实现promise时，可以返回本身，但是目前主流的实现都是返回一个新的promise)

   假设有

```javascript
promise2 = promise1.then(onFulfilled, onRejected);
```
   * 2.2.7.1 如果`onFulfilled`或`onRejected`返回了一个value = x, 执行`PRP(Promise Resolution Procedure)`
     
   - 2.2.7.2如果`onFulfilled`或`onRejected`抛出了`exception = e`, promise2将是`rejected`状态，且`reason = e`;
     
   * 2.2.7.3 如果`onFulfilled`不是一个函数，但是promise1被`resolve`了，那么promise2也将以promise1 `resolve`的值`fulfilled`, 也就是**值透传**的问题（参考核心点2）



### Promise Resolution Procedure

// to be done



更多请参考 [Promises/A+](https://promisesaplus.com/)

## 核心点
1. Promise的构造函数
   * 参数必须是一个函数（入口处判断），函数应接收`resolve`和`reject`两个参数
   * 每个Promise构造函数内都应该包含两个独立的`resolve`和`reject`函数(可以声明在原型上，但是独立声明会更好)
   * `resolve`和`reject`被执行时应该放入微任务队列中执行，这是目前的主流实现,  
     代码中我使用的是`queueMicroTask`这个比较的新的API，除此之外还可以使用`MutationObserver`和Node环境下的`process.nextTick`
     
     需要注意的是在Promise A+标准中并没有规定then的执行必须是微任务，只要求是异步执行就可以
     
     ::: tip 原文如下
      Here “platform code” means engine, environment, and promise implementation code. 
      In practice, this requirement ensures that onFulfilled and onRejected execute asynchronously, after the event loop turn in which then is called, and with a fresh stack.
      This can be implemented with either a “macro-task” mechanism such as setTimeout or setImmediate, or with a “micro-task” mechanism such as MutationObserver or process.nextTick
     :::
     
   * 在`resolve`和`reject`函数执行之前需要判断当前状态是否为pending，是的话才能改变状态,此处体现的是Promise的状态一经变化就不能再改变
   * `resolve`函数和`reject`函数主要作用就是在遍历调用使用then注册的回调函数
   
2. then方法
   * then方法需要挂载在原型上，因为每个Promise对象都有then方法
   * then方法接收两个函数参数，分别为`onFulfilled`和`onRejected`，如果这两个参数有任何一个不为函数，需要我们
     手动生成一个临时函数，临时函数的作用就是把当前值传递下去, 解决下面这种`值透传`的问题(Promise A+标准)
     ``` javascript
     new Promise((resolve) => resolve('something'))
     .then()
     .then()
     .then((value) => console.log(value))
     ```
   * then函数的主要执行逻辑是返回一个Promise, Promise内执行：
       * 当前状态是`fulfilled`或`rejected`, 直接用`this.value`或`this.reason`去分别执行传入的两个回调，得到结果后
         resolve返回的这个Promise
       * 当前状态是pending, 则我们不清楚这个Promise会resolve还是reject，所以我们需要把两个回调都存入到对应的回调数组中
         存储起来，等待Promise状态改变再依次去执行回调
   
3. catch方法  
   catch方法本质上就是在调用then方法，把回调传入then的第二个参数，依状态执行或保存起来，无特殊含义。  
   但是catch函数可以捕获之前then方法中抛出的错误，所以我们应该优先使用catch方法来捕获错误而不是then的第二个参数  
   
4. finally方法  
   * finally方法也是在调用then方法，不同的是需要将finally回调同时存入then的两个参数，因为不清楚Promise的状态会如何变化
     而finally方法无论什么情况总要被执行
   * 回调在执行时，需要先使用静态resolve方法转化finally回调的运行结果，然后再在then中`return`或者`throw`结果  
   
5. 静态all方法 - 返回Promise
   * all方法会等待一组Promise全部resolve然后以数组的方式返回值，或者是其中一个Promise reject之后reject整个Promise 
   * all方法在一般的实现中都默认传入一个数组，然后判断参数是不是数组来抛出错误入参
     但是，根据目前浏览器ES6的实现，all方法可以接收一切部署了`Symbol.iterator`的数据结构，包括但不限于数组、Map、Set、TypedArray等
     这些数据结构的特点是都可以使用统一的`for...of`语法来遍历
   * 需要注意的是，字符串也是一种可遍历的数据结构，如果是字符串，直接返回[[String]]  
   * 使用一个数组来保存所有Promise的结果， 使用for循环加上let-i来把对应的resolve结果存到对应的位置上，
     即：返回的数组里面的结果的顺序需要和传入的Promise的顺序相同
   * 每一个promise在被挂载then方法之前，都需要先调用静态resolve方法转化为Promise
   
6. 静态race方法 - 返回Promise
   * race方法会在一组Promise中对比，有任意一个Promise发生状态改变，都会立即导致返回的Promise的状态变化
   * 接收的参数类型和all方法一致
   
7. 静态resolve和reject方法
   * 接收任意参数，返回一个fulfilled或rejected状态的Promise
   * 参数是一个Promise对象, 原封不动的返回原对象
   * 参数是一个thenable对象，即具有then方法的对象，调用他的then方法，向then方法中传入Promise内定义的resolve和reject两个方法
   * 其他情况 返回一个resolve或reject了参数的Promise
    
## 代码实现
```typescript
import { PromiseType } from "./data/PromiseType";
import {getType, isFunction, isNullOrUndefined, isObject, isString} from "./utils";

export default class Promise {
    private status: PromiseType = PromiseType.PENDING; // 保存当前Promise的状态，初始状态为PENDING
    private value: any; // 保存供then函数接收的数据
    private reason: any; // reject状态下返回的原因

    private onFulfilledCallBack: Function[] = []; // 添加到这个Promise的resolved回调
    private onRejectedCallBack: Function[] = []; // rejected回调

    constructor(asyncFunc: Function) {
        if(!isFunction(asyncFunc)) {
            throw new Error('请传入一个函数来初始化Promise');
        }

        /**
         *  每个Promise都有一对属于自己的resolve和rejected函数
         */
        const resolve = (value: any) => {
          // then的两个参数需要异步执行
          // 根据Promise A+标准 使用宏任务和微任务都可以
          // 此处使用一个比较新的标准queueMicroTask来作为微任务执行，保持和当前浏览器环境一致
          queueMicrotask(() => {
              // 此处判断体现了Promise的状态一经改变就不能再变化
              if(this.status === PromiseType.PENDING) {
                  this.status = PromiseType.FULFILLED;
                  this.value = value;
                  this.onFulfilledCallBack.forEach(callbackFunc => {
                      callbackFunc(value);
                  })
              }
          })
        }

        const rejected = (reason: any) => {
          queueMicrotask(() => {
              if(this.status === PromiseType.PENDING) {
                  this.status = PromiseType.REJECTED;
                  this.reason = reason;
                  this.onRejectedCallBack.forEach(callbackFunc => {
                      callbackFunc(reason);
                  })
              }
          })
        }

        try {
            asyncFunc(resolve, rejected);
        } catch (error: unknown) {
            rejected(error);
        }
    }


    private static executeThen(resolve, reject, executeFunc, value) {
        try {
            const fulFillRet = executeFunc(value);
            resolve(fulFillRet);
        } catch (error: unknown) {
            reject(error);
        }
    }

    /**
     *  1. then函数要返回一个新的Promise，便于链式调用
     */
    then(onFulfilled?: Function, onRejected?: Function): Promise {
        /**
         * 根据Promise A+ 标准 需要做then-值穿透
         * 即: 如果没有传入onFulfilled或传入的不是一个函数
         * 需要自己生成一个函数用于把值传递下去，便于链式调用
         */
        if(!isFunction(onFulfilled)) {
            onFulfilled = (value) => {
                return value;
            }
        }
        if(!isFunction(onRejected)) {
            onRejected = (reason) => {
                // 此处使用throw 而不是return
                throw reason;
            }
        }
        /**
         * 根据当前Promise状态来处理then调用
         */
        switch (this.status) {
            case PromiseType.FULFILLED: {
                return new Promise((resolve, reject) => {
                    Promise.executeThen(resolve, reject, onFulfilled, this.value);
                })
            }
            case PromiseType.REJECTED: {
                return new Promise((resolve, reject) => {
                    Promise.executeThen(resolve, reject, onRejected, this.reason);
                })
            }
            case PromiseType.PENDING: {
                return new Promise((resolve, reject) => {
                    this.onFulfilledCallBack.push((value: any) => {
                        Promise.executeThen(resolve, reject, onFulfilled, value);
                    });
                    this.onRejectedCallBack.push((reason: any) => {
                        Promise.executeThen(resolve, reject, onFulfilled, reason);
                    })
                })
            }
        }
    }


    /**
     * catch方法本质上是在调用then方法
     */
    catch(onRejected: Function): Promise {
        return this.then(null, onRejected);
    }

    finally(finalCallBack: Function): Promise {
        return this.then((value) => {
            return Promise.resolve(finalCallBack()).then(() => value);
        }, (reason) => {
            return Promise.resolve(finalCallBack()).then(() => { throw reason });
        })
    }

    /**
     * 参数为任何部署了Symbol.iterator的数据结构
     * 包括但不限于数组、Map、Set、TypedArray
     * 特殊情况: 字符串 字符串也是一种iterable的数据结构
     * @param promises
     */
    static all(promises: any): Promise {
        // 1. null or undefined
        if(isNullOrUndefined(promises)) {
            throw new TypeError(`请传入一个合法的参数 ${getType(promises)} is not iterable !`)
        } else if(
            isObject(promises) &&
            !(promises[Symbol.iterator] &&
            isFunction(promises[Symbol.iterator]))
        ) {
            // 2. 如果是不合法的对象 抛出错误
            throw new TypeError(`请传入一个合法的参数 object is not iterable !`);
        } else if(isString(promises)) {
            // string直接返回
            return Promise.resolve([promises]);
        }
        const promiseResponse = []; // 保存每个Promise的返回值
        let resolveCount = 0; // 记录已经Resolve的Promise数量
        return new Promise((resolve, reject) => {
            try {
                for(let i = 0; i < promises.length; i++) {
                    Promise.resolve(promises[i]).then((resp) => {
                        // 按顺序保存返回值
                        promiseResponse[i] = resp;
                        resolveCount++;
                        // 如果所有Promise都返回了 则resolve
                        if(resolveCount === promises.length) {
                            resolve(promiseResponse);
                        }
                    }).catch((reason) => {
                        // 遇到reject的整个Promise都要reject
                        reject(reason);
                    })
                }
            } catch (error: unknown) {
                // 防止对象的iterator函数不是一个合理的迭代器函数
                if(error instanceof TypeError) {
                    return Promise.reject('Result of the Symbol.iterator method is not an object')
                }
            }

        })
    }

    static race(promises: any): Promise {
        // 1. null or undefined
        if(isNullOrUndefined(promises)) {
            throw new TypeError(`请传入一个合法的参数 ${getType(promises)} is not iterable !`)
        } else if(
            isObject(promises) &&
            !(promises[Symbol.iterator] &&
            isFunction(promises[Symbol.iterator]))
        ) {
            // 2. 如果是不合法的对象 抛出错误
            throw new TypeError(`请传入一个合法的参数 object is not iterable !`);
        } else if(isString(promises)) {
            // string直接返回
            return Promise.resolve(promises);
        }
        return new Promise((resolve, reject) => {
            try {
                for(let i = 0; i < promises.length; i++) {
                    Promise.resolve(promises[i]).then((resp) => {
                        resolve(resp);
                    }).catch((reason) => {
                        reject(reason);
                    })
                }
            } catch (error: unknown) {
                // 防止对象的iterator函数不是一个合理的迭代器函数
                if(error instanceof TypeError) {
                    return Promise.reject('Result of the Symbol.iterator method is not an object')
                }
            }

        })
    }

    /**
     * 静态resolve方法 返回一个fulfilled状态的Promise
     * @param target
     */
    static resolve(target?: any): Promise {
        // 1.情况一 参数是一个Promise对象, 原封不动的返回原对象
        if(target instanceof Promise) {
            return target;
        }
        // 2.情况二 参数是一个thenable对象
        if(target.then && isFunction(target.then)) {
            return new Promise((resolve, reject) => {
                target.then(resolve, reject);
            })
        }
        // 3.情况三 参数不是thenable对象 或 根本不是对象
        // 4.情况四 不带有参数
        return new Promise((resolve) => {
            resolve(target);
        })
    }

    static reject(reason: any): Promise {
        return new Promise((resolve, reject) => {
            reject(reason);
        });
    }



}
```
     
