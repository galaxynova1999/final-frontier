---
title: 53. 最大子序和
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/maximum-subarray/)
:::

```typescript
function maxSubArray(nums: number[]): number {
   const dp = []; 
   dp[0] = nums[0];
   for(let i = 1; i < nums.length; i++) {
       dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
   }
   return Math.max(...dp);
};
```
