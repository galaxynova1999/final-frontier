---
title: 121. 买卖股票的最佳时机
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)
:::

```typescript
function maxProfit(prices: number[]): number {
   let max = 0;
   let min = prices[0];
   for(let i = 1; i < prices.length; i++) {
       // 获取到目前为止的最低价格
       min = Math.min(min, prices[i]);
       // 计算在当天卖出能不能获利最大
       max = Math.max(max, prices[i] - min);
   }

   return max;
};
```
