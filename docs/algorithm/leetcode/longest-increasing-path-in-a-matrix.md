---
title: 329. 矩阵中的最长递增路径
---
:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/longest-increasing-path-in-a-matrix/)
:::

```typescript
function longestIncreasingPath(matrix: number[][]): number {
    const memo: number[][] = []; // 使用一个数组来记录下某一个节点的最长递增路径

    for (let i = 0; i < matrix.length; i++) {
        memo[i] = new Array(matrix[i].length).fill(0);
    }

    let maxPath = 0;

    const validDir = (row: number, column: number) => {
        if(row >= 0 && row < matrix.length && column >= 0 && column < matrix[row].length) {
            return true;
        }

        return false;
    }

    const dfs = (row: number, column: number): number => {
        if(memo[row][column] !== 0) {
            return memo[row][column];
        }

        memo[row][column]++; // 每个节点的默认递增路径长度为1 为了方便判断 不在初始化时赋1

        if(validDir(row + 1, column) && matrix[row + 1][column] > matrix[row][column]) {
            memo[row][column] = Math.max(memo[row][column], dfs(row + 1, column) + 1);
        }
        if(validDir(row - 1, column) && matrix[row - 1][column] > matrix[row][column]) {
            memo[row][column] = Math.max(memo[row][column], dfs(row - 1, column) + 1);
        }
        if(validDir(row, column + 1) && matrix[row][column + 1] > matrix[row][column]) {
            memo[row][column] = Math.max(memo[row][column], dfs(row, column + 1) + 1);
        }
        if(validDir(row, column - 1) && matrix[row][column - 1] > matrix[row][column]) {
            memo[row][column] = Math.max(memo[row][column], dfs(row, column - 1) + 1);
        }

        return memo[row][column]
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const result = dfs(i, j);
            maxPath = Math.max(maxPath, result);
        }
    }

    return maxPath;
};
```
