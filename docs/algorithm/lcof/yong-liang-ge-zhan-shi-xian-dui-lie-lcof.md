---
title: 剑指 Offer 09. 用两个栈实现队列
---


:::tip 原题链接
[剑指Offer](https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/);
:::

```typescript
class CQueue {
    stack: number[];

    _stack: number[];

    constructor() {
      this.stack = [];
      this._stack = [];
    }

    appendTail(value: number): void {
        this.stack.push(value);
    }

    deleteHead(): number {
       if(this._stack.length) {
           return this._stack.pop();
       } 
       while(this.stack.length) {
           this._stack.push(this.stack.pop());
       }
       return this._stack.length ? this._stack.pop() : -1;
    }
}
```
