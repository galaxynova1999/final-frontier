---
title: 718. 最长重复子数组
---

:::tip 原题链接
[LeetCode 718](https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/)
:::

```typescript
// 核心思想 滑动窗口
function findLength(nums1: number[], nums2: number[]): number {
    // 计算固定一段中的最大值
   // aStart - 第一个数组开始计算的位置  bStart - 第二个数组开始计算的位置
   // len 要比较的长度
   const findMaxByStart = (aStart: number, bStart: number, len: number) => {
           let max = 0;
           let temp = 0;
           for(let i = 0; i < len; i++) {
               if(nums1[aStart + i] === nums2[bStart + i]) {
                   temp++;
               } else {
                   temp = 0;
               }
               max = Math.max(max, temp);
           }
           return max;
       }

    let answer = 0;
    // nums1对齐nums2 nums2不动 nums1每次向左移动
    for(let i = 0; i < nums1.length; i++) {
       const min = Math.min(nums2.length, nums1.length - i);
       // 当窗口大小小于answer时 可以直接break 因为后面的长度不可能再大于当前的answer
       if(min < answer) {
           break;
       }
       const result = findMaxByStart(i, 0, min);
       answer = Math.max(answer, result); 
    }   
    // nums2对齐nums1 nums1不动 nums2每次向左移动
    for(let i = 0; i < nums2.length; i++) {
       const min = Math.min(nums1.length, nums2.length - i);
       if(min < answer) {
           break;
       }
       const result = findMaxByStart(0, i, min);
       answer = Math.max(answer, result); 
    }   
    return answer;
};
```
