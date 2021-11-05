---
title: 496. 下一个更大元素 I
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/next-greater-element-i/)
:::

```typescript
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const map = new Map<number, number>();
    const queue = [];
    const answer = [];

    for(let i = 0; i < nums2.length; i++) {
        while(queue.length && nums2[i] > queue[queue.length - 1]) {
            map.set(queue.pop(), nums2[i]);
        }
        queue.push(nums2[i]);
    }

    for(let i = 0; i < nums1.length; i++) {
        answer[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1;
    }

    return answer;
};
```
