---
title: 179. 最大数
---

::: tip 原题链接
[LeetCode 3](https://leetcode-cn.com/problems/largest-number/)
:::


```typescript
function largestNumber(nums: number[]): string {
    // 核心思想 排序 规则是比较两个数左右放置哪个大
    // 比如 10 2;
    // 则比较 102 210 所以2应该放在10的前面
    nums.sort((a, b) => {
        // a = 10 b = 2;
        let sa = 10, sb = 10;
        while(sa <= a) {
            sa *= 10;
        }
        // sa = 100
        while(sb <= b) {
            sb *= 10;
        }
        // sb = 10;
        // 100 * 2 + 10 -  10 * 10 + 2
        // 210 - 102

        return (sa * b + a) - (sb * a + b);
    });

    if(nums[0] === 0) {
        return '0';
    }

    return nums.join("");
};
```
