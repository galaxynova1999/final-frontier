---
title: 695. 岛屿的最大面积
---
:::tip 原题链接
[LeetCode 695](https://leetcode-cn.com/problems/max-area-of-island/)
:::

```typescript
function maxAreaOfIsland(grid: number[][]): number {
    const dfs = (i: number, j: number) => {
        // 判定区域是否有效
       if(i >= grid.length || j >= grid[0].length || j < 0 || i < 0 || grid[i][j] != 1) {
           return 0;
       }
       grid[i][j] = 2;// 剪枝 标记当前区域已被访问过
       let area = 1; // 当前区域的面积
       area += dfs(i + 1, j);
       area += dfs(i - 1, j);
       area += dfs(i, j + 1);
       area += dfs(i, j - 1);
       return area;
    }
    let answer = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 1) {
                answer = Math.max(answer, dfs(i, j));
            }
        }
    }
    return answer;

};
```
