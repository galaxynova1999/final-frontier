---
title: 221. 最大正方形
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/maximal-square/)
:::

```typescript
function maximalSquare(matrix: string[][]): number {
  if(!matrix || !matrix.length || !matrix[0].length) {
      return 0;
  }
  const yMax = matrix.length;
  const xMax = matrix[0].length;
  let answer = 0; 

  // 代表i , j 有右下角的正方形的最大边长
  const dp = Array.from({ length: yMax + 1 }, () => new Array(xMax + 1).fill(0));
  for(let i = 0; i < yMax; i++) {
      if(matrix[i][0] === '1') {
          dp[i][0] = 1;
          answer = 1;
      }
  }
  for(let i = 0; i < xMax; i++) {
      if(matrix[0][i] === '1') {
          dp[0][i] = 1;
          answer = 1;
      }
  }
  
  for(let i = 1; i < yMax; i++) {
      for(let j = 1; j < xMax; j++) {
          if(matrix[i][j] === '1') {
              dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
              answer = Math.max(answer, dp[i][j]);
          }
      }
  }

  return answer * answer;

};
```
