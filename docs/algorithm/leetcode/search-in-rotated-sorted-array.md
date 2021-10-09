---
title: 33. 搜索旋转排序数组
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/);
:::

```typescript
function search(nums: number[], target: number): number {
   // 重点 原序列是升序的
    
   // 二分后 一定有一侧是升序的 且 升序的那一侧是有序的
   if(!nums) return -1;
   const len = nums.length;
   if(len === 1) return nums[0] === target ? 0 : -1;

   let left = 0;
   let right = len - 1;

   while(left <= right) {
       const mid = Math.floor((left + right) / 2);
       const value = nums[mid];
       if(value === target) return mid;

       if(nums[0] <= value) {
           // 左侧有序
           if(nums[0] <= target && value > target) {
               right = mid - 1
           } else {
              left = mid + 1;
           }
       } else {
           if(value < target && nums[len - 1] >= target) {
               left = mid + 1;
           } else {
               right = mid - 1;
           }
       }
   }

   return -1;
};
```
