---
title: 剑指 Offer 53 - II. 0～n-1中缺失的数字
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/)
:::

```typescript
function missingNumber(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
      const mid = Math.floor((left + right) >> 1);
      if(nums[mid] === mid) {
         left = mid + 1
      } else {
          right = mid - 1;
      }
  }
  return left;
};
```
