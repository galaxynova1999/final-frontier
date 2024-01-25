---
title: 279. 完美平方数
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems//perfect-squares/submissions/);
:::


```typescript
function numSquares(n: number): number {
    const dp = new Array(n).fill(0);

    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;

    for (let i = 4; i <= n; i++) {
        // 每个整数i 必然是由一个完全平方数转移而来，假设这个数是j dp[j]表示组成j的最小完全平方数
        // 那么dp[i] = dp[j] + 1 (+1表示使用j这个完全平方数)
        // 接下来只需要枚举可以转移来的j就行 从中找dp[j]最小的那个
        let min = Math.pow(10, 5);

        for (let j = 1; j * j <= i ; j++) {
            min = Math.min(min, dp[i - j * j]);
        }

        dp[i] = min + 1;
    }


    return dp[n];
};
```
