---
title: 322. 零钱兑换
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/coin-change/)
:::

```typescript
function coinChange(coins: number[], amount: number): number {
   // 思路： 动态规划
   // dp[i] 表示金额为 i 时的答案

   const dp = new Array(amount + 1).fill(amount + 1);
   dp[0] = 0;

   // 枚举每一种金额
   for(let i = 1; i <= amount; i++) {
      // 枚举每一种硬币 
      for(let coin of coins) {
          // 可以从上一种状态转移过来
          if(i - coin >= 0) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
          }
      }
   }

   return dp[amount] > amount ? -1 : dp[amount];
};
```
