---
title: 41. 缺失的第一个正数
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/first-missing-positive/)
:::


```typescript
function firstMissingPositive(nums: number[]): number {
    // 将所有正数都放到对应位置上去
    for(let i = 0; i < nums.length; i++) {
        // 错误写法
       // const value = nums[i];
       while(
           nums[i] > 0 &&
           nums[i] <= nums.length &&
           nums[nums[i] - 1] !== nums[i]
       ) {
            // 以下交换算法有问题 会导致值不对
           // [nums[i], nums[nums[i] - 1]] = [nums[nums[i] - 1], nums[i]];
           // 这样的是对的 [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
           // 原因是 右侧按顺序解构 如果先修改了num[i]的值 后面再读取时 就读取了解构后的值
           // 不停的交换
           [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
       }
    }

    // 再遍历一遍 找到不正确的数
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return nums.length + 1;
};
```
