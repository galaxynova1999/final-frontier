---
title: 416. 分割等和数组
---
:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/partition-equal-subset-sum/)
:::

```typescript
function canPartition(nums: number[]): boolean {
   const sum = nums.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
   if(sum % 2 !== 0 || nums.length < 2) {
       return false; // 奇数直接false
   }
   const target = sum / 2;
   const max = Math.max(...nums);
   if(max > target) {
       return false;
   }
   const dp: boolean[][] = [];
   // dp[i][j] 表示 前i个元素构成的子集中，是否存在可以让和为j的子集
   for(let i = 0; i < nums.length; i++) {
       // 和不可能为0
       dp[i] = new Array(target + 1).fill(false);
       dp[i][0] = true;
   }

   dp[0][nums[0]] = true; // 选第一个数让和等于第一个数 是必然true的 其他都是false

   for(let i = 1; i < nums.length; i++) {
       for(let j = 1; j <= target; j++) {
           if(j >= nums[i]) {
               // 可以选当前数字 或者不选
               dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
           } else {
               dp[i][j] = dp[i - 1][j];
           }548
       }
   }

   return dp[nums.length - 1][target];

};
```

## TODO 采用一维数组优化空间复杂度

## TODO 返回分割后的两个子集
