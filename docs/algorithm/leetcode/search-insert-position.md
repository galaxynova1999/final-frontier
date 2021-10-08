---
title: 35. 搜索插入位置
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/search-insert-position/);
:::


```typescript
// 从左到右寻找第一个大于等于target的数
function searchInsert(nums: number[], target: number): number {
   let left = 0;
   let right = nums.length - 1;
   let answer = nums.length; // 注意初始条件

   while(left <= right) {
       const mid = Math.floor((left + right) / 2);
       if(nums[mid] >= target) {
           answer = mid;
           right = mid - 1;
       } else {
           left = mid + 1;
       }
   }  

   return answer;
};
```
