---
title: 31. 栈的压入、弹出序列
---


:::tip 原题链接
[剑指Offer](https://leetcode-cn.com/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/);
:::


```typescript
function validateStackSequences(pushed: number[], popped: number[]): boolean {
   const stack = [];
   let index = 0;

   pushed.forEach(push => {
       stack.push(push);
       // 找到了可能的出栈点
       while(stack.length && stack[stack.length - 1] === popped[index]) {
           index++; // 满足顺序的全部出栈
           stack.pop();
       }
   })

   return stack.length === 0;
};
```
