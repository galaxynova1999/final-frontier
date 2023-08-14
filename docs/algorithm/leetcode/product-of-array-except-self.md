---
title: 238. 除自身以外数组的乘积
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/product-of-array-except-self/)
:::


```typescript
function productExceptSelf(nums: number[]): number[] {
  let leftSum: number[] = [];
  let rightSum: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      leftSum[i] = 1;
    } else {
      leftSum[i] = leftSum[i - 1] * nums[i - 1];
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if(i === nums.length - 1) {
      rightSum[i] = 1;
    } else {
      rightSum[i] = rightSum[i + 1] * nums[i + 1];
    }
  }
  

  let result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftSum[i] * rightSum[i];
  }

  return result;
};
```
