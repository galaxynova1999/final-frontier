---
title: 134. 加油站
---
:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/gas-station/)
:::

```typescript
function canCompleteCircuit(gas: number[], cost: number[]): number {
    let totalCost = 0;
    let totalGas = 0;
    let currentGas = 0;
    let startStation = 0;

    // 从第一个加油站开始 看看能走多远
    for (let i = 0; i < cost.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        currentGas = currentGas + gas[i] - cost[i];

        // 如果已经走不到下一个站了 那么就从下一个站开始枚举 从 0 - i 全部都不是正确答案

        if(currentGas < 0) {
            startStation = i + 1;
            // 绝对不能把这两个置为0 因为统计了是从任意一点出发 到结束的油和功耗
            // 统计的是绕一圈的功耗 从任意一点出发 都是绕了一圈
            // totalGas = 0;
            // totalCost = 0;
            currentGas = 0;
        }
    }

    // 全部遍历完了 看看能不能走完
    if(totalGas >= totalCost) {
        return startStation;
    }

    return -1;
};
```
