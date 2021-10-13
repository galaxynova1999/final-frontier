---
title: 136. 只出现一次的数字
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/single-number/)
:::

```typescript
function singleNumber(nums: number[]): number {
    // 1.任何数与0异或  都是原数
    let answer = 0;
    // 2. 任何数与自身异或 都是 0
    nums.forEach(n => {
        answer ^= n;
    })
    return answer;
};
```
