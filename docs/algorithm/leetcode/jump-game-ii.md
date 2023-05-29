---
title: 45. 跳跃游戏-2
---

:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/combination-sum-ii/)
:::


```typescript
function JumpByForce(nums: number[]): number {
    // 可以走最后一位开始 暴力枚举 + 贪心 可以到达的点
    let endPos = nums.length - 1;
    let steps = 0;

    while (endPos > 0) {
        // 从最左边开始贪心
        for (let i = 0; i < endPos; i++) {
            if(i + nums[i] >= endPos) {
                endPos = i;
                steps++;
                break;
            }
        }
    }
    return steps;
}


function jump(nums: number[]): number {
    let target = 0; // 要跳转到的点的下标
    let steps = 0;
    let maxPos = 0;
    // 不要访问最后一个点 最后一个点应该在前面跳跃过来
    // 在访问最后一个元素之前，我们的边界一定大于等于最后一个位置，否则就无法跳到最后一个位置了。
    for (let i = 0; i < nums.length - 1; i++) {
        maxPos = Math.max(maxPos, i + nums[i]); // 记录这一段中最大的跳跃值
        if(i === target) {
            steps++;
            target = maxPos; // 目标变成下一个要跳跃到的点
            maxPos = 0; // 清空一下
        }
    }


    return steps;
};
```
