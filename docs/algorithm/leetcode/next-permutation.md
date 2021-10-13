---
title: 31. 下一个排列
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/next-permutation/)
:::

```typescript
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    // 从后向前找到第一个非降的数
    let i = nums.length - 2;
    while(i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // 从后向前找第一个大于nums[i]的数
    if(i >= 0) {
        let j = nums.length - 1;
        while(j > i && nums[j] <= nums[i]) {
            j--;
        }

        // 交换他们
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    // 翻转后半段数组
    let p = i + 1;
    let q = nums.length - 1;
    while(p <= q) {
        [nums[p], nums[q]] = [nums[q], nums[p]];
        p++;
        q--;
    }
};
```
