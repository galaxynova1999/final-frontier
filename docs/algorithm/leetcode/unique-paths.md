---
title: 62. 不同路径
---

:::tip 原题链接
[LeetCode 62](https://leetcode-cn.com/problems/unique-paths/)
:::

### 思路与算法

我们用 $f(i, j)$ 表示从左上角走到 $(i, j)$ 的路径数量，其中 $i$ 和 $j$ 的范围分别是 $[0, m)$ 和 $[0, n)$。

由于我们每一步只能从向下或者向右移动一步，因此要想走到 $(i, j)$，如果向下走一步，那么会从 $(i-1, j)$ 走过来；如果向右走一步，那么会从 $(i, j-1)$ 走过来。因此我们可以写出动态规划转移方程：

$$
f(i, j) = f(i-1, j) + f(i, j-1)
$$

需要注意的是，如果 $i=0$，那么 $f(i-1,j)$ 并不是一个满足要求的状态，我们需要忽略这一项；同理，如果 $j=0$，那么 $f(i,j-1)$ 并不是一个满足要求的状态，我们需要忽略这一项。

初始条件为 $f(0,0)=1$，即从左上角走到左上角有一种方法。

最终的答案即为 $f(m-1,n-1)$。

### 细节

为了方便代码编写，我们可以将所有的 $f(0, j)$ 以及 $f(i, 0)$ 都设置为边界条件，它们的值均为 $1$。

### 代码

```javascript
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = new Array(m);
    for(let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(0);
    }
    for(let i = 0; i < m ; i++) {
        dp[i][0] = 1;
    }
    for(let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};

```
