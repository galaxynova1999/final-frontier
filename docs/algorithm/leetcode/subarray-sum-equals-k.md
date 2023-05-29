---
title: 560. 和为K的子数组
---
:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/subarray-sum-equals-k/)
:::

```typescript
// 纯前缀和
function subarraySumPure(nums: number[], k: number): number {
    // 前缀和
    const sum: number[] = [];
    sum[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum[i] = sum[i - 1] + nums[i];
    }
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for(let j = -1; j < i; j++) {
            if(j < 0 && sum[i] === k) {
                count++;
            } else if(j >= 0 && sum[i] - sum[j] === k) {
                count++;
            }
        }

    }

    return count;
};
// 使用前缀和和哈希表优化
function subarraySum(nums: number[], k: number): number {
    // 前缀和
    const countMap = new Map<number, number>(); // 和：出现次数
    // 这一行的作用就是为了应对 nums[0] +nums[1] + ... + nums[i] == k 的情况的, 也就是从下标 0 累加到下标 i, 刚好和为k的情况
    // 类比与前缀和中 j 从 -1开始的作用
    countMap.set(0, 1);
    let sum = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if(countMap.has(sum - k)) {
            count += countMap.get(sum - k);
        }

        if(countMap.has(sum)) {
            countMap.set(sum, countMap.get(sum) + 1);
        } else {
            countMap.set(sum, 1);
        }
    }

    return count;
};
```
