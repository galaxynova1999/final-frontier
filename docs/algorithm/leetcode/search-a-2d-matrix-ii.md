---
title: 240. 搜索二维矩阵 II
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/search-a-2d-matrix-ii/);
:::


```typescript
function searchMatrix(matrix: number[][], target: number): boolean {
   let column = matrix.length - 1;
   let row = 0;
   // 从左下角开始

   while(column >= 0 && column < matrix.length && row >= 0 && row < matrix[0].length) {
       const num = matrix[column][row];
       if(num === target) {
           return true;
       }
       if(num > target) {
           column--;
       } else {
           row++;
       }
   }
   return false;
};
```
