---
title: 200. 岛屿数量
---
:::tip 原题链接
[LeetCode 200](https://leetcode-cn.com/problems/number-of-islands/)
:::

```typescript
function numIslands(grid: string[][]): number {
    // 将i j 开始的土地都标上访问过的标识  
    const dfs = (i: number, j: number) => {
        if(i >= grid.length || j >= grid[0].length || i < 0 || j < 0) {
            return;
        }
        if(grid[i][j] !== '1') {
            return ;
        }
        grid[i][j] = '-1';
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }
    let answer = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                answer++;
                dfs(i, j);
            }
        }
    }
    return answer;
};
```
