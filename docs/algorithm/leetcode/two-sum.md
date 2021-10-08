---
title: 1. 两数之和
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/two-sum/)
:::


```typescript
function twoSum(nums: number[], target: number): number[] {
   const hash = new Map<number, number>();
   for(let i = 0; i < nums.length; i++) {
       if(hash.has(target - nums[i])) {
           return [hash.get(target - nums[i]), i];
       }
       hash.set(nums[i], i);
   }
   return [];
};
```
