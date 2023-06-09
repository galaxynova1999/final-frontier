---
title: 977. 有序数组的平方
---
:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/squares-of-a-sorted-array/)
:::


```typescript
function sortedSquares(nums: number[]): number[] {
    let left = 0, right = nums.length - 1;
    const answer: number[] = [];
    while(left <= right) {
        if(Math.abs(nums[left]) < Math.abs(nums[right])) {
            answer.unshift(nums[right] * nums[right]);
            right--;
        } else {
            answer.unshift(nums[left] * nums[left]);
            left++;
        }
    }

    return answer;
};
```
