---
title: 48. 旋转图像
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/rotate-image/)
:::


```typescript
function rotate(matrix: number[][]): void {
  // 先水平翻转 再沿对角线翻转

  const n = matrix.length;
  for(let i = 0; i < Math.floor(n / 2); i++) {
      for(let j = 0; j < n; j++ ) {
          // 注意 n - i -1;
          [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
      }
  }

  for(let i = 0; i < n; i++) {
      // 注意 j < i
      for(let j = 0; j < i; j++) {
          // 直接坐标交换
         [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
  }
};
```
