---
title: 674. 最长连续递增序列
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/)
:::

```typescript
function findLengthOfLCIS(nums: number[]): number {
  if(!nums) return -1;  
  const dp = [];
  dp[0] = 1;
  for(let i = 1; i < nums.length; i++) {
      if(nums[i] > nums[i - 1]) {
          dp[i] = dp[i - 1] + 1;
      } else {
          dp[i] = 1;
      }
  }
  return Math.max(...dp);
};
```
