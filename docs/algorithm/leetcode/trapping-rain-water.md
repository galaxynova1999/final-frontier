---
title: 42. 接雨水
---
:::tip 原题链接
[LeetCode 42](https://leetcode-cn.com/problems/trapping-rain-water/)
:::

```typescript
function trap(height: number[]): number {
   // 核心思路 左右两侧的最大高度中的较小值 减去当前柱子的高度 就等于这块区域能接的雨水
    const len = height.length;
    const leftMax = new Array(len).fill(0);
    const rightMax = new Array(len).fill(0);
    leftMax[0] = height[0];
    rightMax[len - 1] = height[len - 1];
    for(let i = 1; i < len; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    // 倒着计算右侧的最大高度
    for(let i = len - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
    
    let result = 0;
    for(let i = 0; i < height.length; i++) {
        result += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
   return result;
};
```
