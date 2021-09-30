---
title: 223. 矩形面积
---
:::tip 原题链接
[LeetCode 223](https://leetcode-cn.com/problems/rectangle-area/)
:::

```typescript
function computeArea(ax1: number, ay1: number, ax2: number, ay2: number, bx1: number, by1: number, bx2: number, by2: number): number {
    const totalArea = (ax2 - ax1) * (ay2 - ay1) + (bx2 - bx1) * (by2 - by1);
    
    // 完全不相交
    if(ay1 >= by2 || by1 >= ay2 || bx1 >= ax2 || ax1 >= bx2) {
       return totalArea;
    }
    
    let width = Math.min(bx2, ax2) - Math.max(ax1,bx1);
    let height = Math.min(ay2, by2) - Math.max(ay1, by1);
     
     // 要考虑完全内嵌的情况
    if(width < 0) {
        width = 0;
    } else if(height < 0) {
        height = 0;
    }
    return totalArea - (width * height);
};
```
