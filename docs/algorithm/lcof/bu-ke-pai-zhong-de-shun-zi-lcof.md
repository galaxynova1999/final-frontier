---
title: 剑指 Offer 61. 扑克牌中的顺子
---


:::tip 原题链接
[剑指Offer](https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/);
:::


```typescript
function isStraight(nums: number[]): boolean {
   nums = nums.filter(item => item); // 过滤大小王
   if(nums.length !== Array.from(new Set([...nums])).length) {
       return false; // 有重复 直接错误
   }
   return Math.max(...nums) - Math.min(...nums) < 5;
};
```
