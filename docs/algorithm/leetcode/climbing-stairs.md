---
title: 70. 爬楼梯
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/climbing-stairs/);
:::


```typescript
function climbStairs(n: number): number {

   let first = 0;
   let second = 0;
   let answer = 1;
   for(let i = 1; i <= n; i++) {
       first = second;
       second = answer;
       answer = first + second;
   }

   return answer;
};
```
