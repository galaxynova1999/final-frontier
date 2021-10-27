---
title: 167. 两数之和 II - 输入有序数组
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)
:::

```typescript
function twoSum(numbers: number[], target: number): number[] {
   let i = 0, j = numbers.length - 1;

   while(i < j) {
       const sum = numbers[i] + numbers[j];
       if(sum === target) {
           return [i + 1, j + 1];
       } else if(sum < target) {
           i++;
       } else {
           j--;
       }
   }

   return [];
};
```
