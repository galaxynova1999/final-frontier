---
title: 120. 三角形的最小路径和
---

:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/triangle/);
:::

```typescript
// 从底开始 原地操作
function startFromEnd(triangle: number[][]): number {
  for(let level = triangle.length - 2; level >= 0; level--) {
    for(let column = 0; column < triangle[level].length; column++) {
      triangle[level][column] = Math.min(triangle[level + 1][column], triangle[level + 1][column + 1]) + triangle[level][column];
    }
  }

  return triangle[0][0];
}
function minimumTotal(triangle: number[][]): number {
    const dp: number[][] = new Array(triangle.length);

    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(triangle[i].length).fill(0);
    }
    // 1.边界条件 最左侧和最右侧的时候

    dp[0][0] = triangle[0][0];
    for (let level = 1; level < triangle.length; level++) {
        // 最左侧 只能从上一个最左侧转译过来
        dp[level][0] = dp[level - 1][0] + triangle[level][0];
        for (let column = 1; column < triangle[level].length - 1; column++) {
            dp[level][column] = Math.min(dp[level - 1][column - 1], dp[level - 1][column]) + triangle[level][column];
        }
        // 最右侧
        dp[level][triangle[level].length - 1] = dp[level - 1][triangle[level - 1].length - 1] + triangle[level][triangle[level].length - 1]
    }

    // 找最后一层的最小值

    return Math.min(...dp[dp.length - 1]);
};
```
