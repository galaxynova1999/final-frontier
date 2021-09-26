---
title: 152. 乘积最大子数组
---
:::tip 原题链接
[LeetCode 152](https://leetcode-cn.com/problems/maximum-product-subarray/)
:::

```typescript
function maxProduct(nums: number[]): number {
    // 核心思路 当遇到负数时 交换已经记录下的最小值和最大值 因为负数相乘会导致最大值变成最小值

    let max = Number.MIN_SAFE_INTEGER;
    let _max = 1; // 必须初始化为1  保证不会改变第一个数
    let _min = 1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < 0) {
            const temp = _max;
            _max = _min;
            _min = temp;
        }
        _max = Math.max(_max * nums[i], nums[i]);
        _min = Math.min(_min * nums[i], nums[i]);
        max = Math.max(max, _max);
    }
    return max;
};
```
