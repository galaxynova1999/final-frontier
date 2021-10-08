---
title: 122. 买卖股票的最佳时机 II
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/);
:::

```typescript
function maxProfit(prices: number[]): number {
    let max = 0;

    // 可以多次买入卖出
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i - 1]) {
            // 有利可图
            max += (prices[i] - prices[i - 1]);
        }
    }

    return max;
};
```
