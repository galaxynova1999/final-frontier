---
title: 232. 用栈实现队列

---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/implement-queue-using-stacks/);
:::

```typescript
class MyQueue {
    stack: number[];

    _stack: number[];

    front: number;

    constructor() {
      this.stack = [];
      this._stack = [];
    }

    push(x: number): void {
      if(this.stack.length === 0) {
          this.front = x;
      }
      this.stack.push(x); 
    }

    pop(): number {
      if(this._stack.length) {
          return this._stack.pop();
      }
      while(this.stack.length) {
          this._stack.push(this.stack.pop());
      }
      return this._stack.length ? this._stack.pop() : -1;
    }

    peek(): number {
      // _stack不为空 就是栈顶元素
      if(this._stack.length) {
          return this._stack[this._stack.length - 1];
      }

      return this.front;
    }

    empty(): boolean {
      return this.stack.length === 0 && this._stack.length === 0;
    }
}
```
