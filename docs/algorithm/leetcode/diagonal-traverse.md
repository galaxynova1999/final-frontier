---
title: 498. 对角线遍历
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/diagonal-traverse/)
:::


```typescript
function findDiagonalOrder(mat: number[][]): number[] {
    let xMax = mat[0].length;
    let yMax = mat.length;
    const result = [];
    for(let i = 0; i < xMax + yMax - 1; i++) {
        const temp = [];
        let y = i < xMax ? 0 : i - xMax + 1;
        let x = i < xMax ? i : xMax - 1;
        while(y < yMax && x >= 0) {
            temp.push(mat[y][x]);
            y++;
            x--;
        }

        if(i % 2 === 0) {
            temp.reverse();
        }
        result.push(...temp);
    }

    return result;
};
```
