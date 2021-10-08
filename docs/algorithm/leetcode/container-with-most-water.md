---
title: 11. 盛最多水的容器
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/container-with-most-water/)
:::


```typescript
function maxArea(height: number[]): number {
   // 双指针

   let left = 0;
   let right = height.length - 1;
   let answer = 0;

   while(left < right) {
       answer = Math.max(Math.min(height[left], height[right]) * (right - left), answer); 
       if(height[left] <= height[right]) {
           left++;
           // 优化
           while(height[left] <= height[left - 1] && left < right) {
               left++;
           }
       } else {
           right--;
           while(height[right] <= height[right + 1] && right > left) {
               right--;
           } 
       }
   }

   return answer;
};
```
