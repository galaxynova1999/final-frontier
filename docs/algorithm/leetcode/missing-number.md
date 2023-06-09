---
title: 268. 丢失的数字
---
:::tip 原题链接
[LeetCode 394](https://leetcode.cn/problems/missing-number/)
:::

```typescript
function missingNumber(nums: number[]): number {
    // 任何数与0异或是原数  任何数与自身异或位0

    const len = nums.length;
    for(let i = 0; i <= len; i++) {
        nums.push(i);
    }

    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }

    return xor;
};
```
