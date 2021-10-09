---
title: 54. 螺旋矩阵
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/spiral-matrix/);
:::


```typescript
function spiralOrder(matrix: number[][]): number[] {
   const xMax = matrix[0].length - 1;
   const yMax = matrix.length - 1;
   const total = (xMax + 1) * (yMax + 1);

   let left = 0;
   let right = xMax;
   let top = 0;
   let bottom = yMax;

   const answer = [];

   while(true) {
     for(let i = left; i <= right; i++) {
         answer.push(matrix[top][i]);
     }
     top++;
     if(answer.length === total) {
         break;
     }  

     for(let i = top; i <= bottom; i++) {
        answer.push(matrix[i][right]);
     }
     right--;
     if(answer.length === total) {
         break;
     } 

     for(let i = right; i >= left; i--) {
         answer.push(matrix[bottom][i]);
     }  
     bottom--;
     if(answer.length === total) {
         break;
     }

     for(let i = bottom; i >= top; i--) {
         answer.push(matrix[i][left]);
     }
     left++;
     if(answer.length === total) {
         break;
     }
   }

   return answer;

};
```
