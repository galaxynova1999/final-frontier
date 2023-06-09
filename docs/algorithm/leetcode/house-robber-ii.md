---
title: 213. 打家劫舍-2
---
:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/house-robber-ii/)
:::

```typescript
function rob(nums: number[]): number {
    if(nums?.length <= 2) {
        return Math.max(...nums);
    }

    const dpByRange = (start: number, end: number) => {
        const dp: number[] = [];
        dp[start] = nums[start];
        dp[start + 1] = Math.max(nums[start], nums[start + 1]);

        for (let i = start + 2; i <= end; i++) {
            dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
        }

        return dp[end];
    }
    // 要分成两种情况来讨论
    // 1. 抢劫最后一间房子 那么第一间就不能抢
    // 2. 抢劫第一间房子 那么最后一间就不能抢
    return Math.max(
        dpByRange(1, nums.length - 1),
        dpByRange(0, nums.length - 2),
    )
};
```
