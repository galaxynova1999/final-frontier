---
title: 155. 最小栈
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/min-stack/);
:::

```typescript
class MinStack {
    min: number[];
    
    stack: number[];

    constructor() {
      this.min = [];
      this.stack = [];
    }

    push(val: number): void {
      this.stack.push(val);
      const min = this.min[this.min.length - 1] ?? Infinity;
      if(val < min) {
         this.min.push(val);
      } else {
          this.min.push(min);
      }
    }

    pop(): void {
       this.stack.pop();
       this.min.pop();
    }

    top(): number {
       return this.stack[this.stack.length - 1];
    }

    getMin(): number {
       return this.min[this.min.length - 1];
    }
}
```
