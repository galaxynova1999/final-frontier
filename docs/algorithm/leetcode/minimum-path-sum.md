---
title: 64. 最小路径和
---
:::tip 原题链接
[LeetCode 64](https://leetcode-cn.com/problems/minimum-path-sum/);
:::

### 方法一 DFS

纯粹的DFS会超时......
```typescript
function minPathSum(grid: number[][]): number {
    if(!grid) {
        return 0;
    }
   let answer = Number.MAX_SAFE_INTEGER;
   const xMax = grid[0].length - 1;
   const yMax = grid.length - 1;
   const dfs = (x: number, y: number, sum: number) => {
     if(x > xMax || y > yMax) {
         return;
     }  
     if(x === xMax && y === yMax) {
        answer = Math.min(answer, sum + grid[y][x]);
        return;
     }
     dfs(x, y + 1, sum + grid[y][x]);
     dfs(x + 1, y, sum + grid[y][x]);
   }
   dfs(0, 0, 0);
   return answer;
};
```

### 方法二 DFS + 记忆化搜索

```typescript
function minPathSum(grid: number[][]): number {
    if(!grid) {
        return 0;
    }
   const xMax = grid[0].length - 1;
   const yMax = grid.length - 1;
   // 记忆化搜索
   const memory = Array.from({ length: yMax + 1 }, () => new Array(xMax + 1).fill(-1));

   const dfs = (x: number, y: number) => {
     if(x > xMax || y > yMax) {
         return Number.MAX_SAFE_INTEGER;
     }  

     if(memory[y][x] !== -1) {
         return memory[y][x];
     } 

     if(x === xMax && y === yMax) {
         return grid[yMax][xMax];
     }
     
     const left = dfs(x, y + 1);
     const right = dfs(x + 1, y);
     memory[y][x] = grid[y][x] + Math.min(left, right);
     return memory[y][x];
   }
   
   return dfs(0, 0);
};
```


### 方法三 动态规划

由于路径的方向只能是向下或向右，因此网格的第一行的每个元素只能从左上角元素开始向右移动到达，网格的第一列的每个元素只能从左上角元素开始向下移动到达，此时的路径是唯一的，因此每个元素对应的最小路径和即为对应的路径上的数字总和。

对于不在第一行和第一列的元素，可以从其上方相邻元素向下移动一步到达，或者从其左方相邻元素向右移动一步到达，元素对应的最小路径和等于其上方相邻元素与其左方相邻元素两者对应的最小路径和中的最小值加上当前元素的值。由于每个元素对应的最小路径和与其相邻元素对应的最小路径和有关，因此可以使用动态规划求解。

创建二维数组 $\textit{dp}$，与原始网格的大小相同，$\textit{dp}[i][j]$ 表示从左上角出发到 $(i,j)$ 位置的最小路径和。显然，$\textit{dp}[0][0]=\textit{grid}[0][0]$。对于 $\textit{dp}$ 中的其余元素，通过以下状态转移方程计算元素值。

- 当 $i>0$ 且 $j=0$ 时，$\textit{dp}[i][0]=\textit{dp}[i-1][0]+\textit{grid}[i][0]$。

- 当 $i=0$ 且 $j>0$ 时，$\textit{dp}[0][j]=\textit{dp}[0][j-1]+\textit{grid}[0][j]$。

- 当 $i>0$ 且 $j>0$ 时，$\textit{dp}[i][j]=\min(\textit{dp}[i-1][j],\textit{dp}[i][j-1])+\textit{grid}[i][j]$。

最后得到 $\textit{dp}[m-1][n-1]$ 的值即为从网格左上角到网格右下角的最小路径和。


**复杂度分析**

- 时间复杂度：$O(mn)$，其中 $m$ 和 $n$ 分别是网格的行数和列数。需要对整个网格遍历一次，计算 $\textit{dp}$ 的每个元素的值。

- 空间复杂度：$O(mn)$，其中 $m$ 和 $n$ 分别是网格的行数和列数。创建一个二维数组 $dp$，和网格大小相同。
  空间复杂度可以优化，例如每次只存储上一行的 $\textit{dp}$ 值，则可以将空间复杂度优化到 $O(n)$。
