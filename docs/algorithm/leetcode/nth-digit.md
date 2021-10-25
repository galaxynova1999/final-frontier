---
title: 400. 第 N 位数字
---

::: tip 原题链接
[LeetCode 3](https://leetcode-cn.com/problems/nth-digit/)
:::

```typescript
function findNthDigit(n: number): number {
    // 1. 计算n在哪个区间
    let lower_bound = 1;
    let digit_count = 1; 
    let bit_count = digit_count * 9 * lower_bound; // 记录这一段总共有多少位 9 180 2700 36000
    // 刚开始是一位数 1 - 9 共9位 对应 0 <= n <= 9;
    // 10 - 99 共180位 对应 10 <= n <= 189
    // 100 - 999 共2700位 对应 190 <= n <= 2889;
    // 1000 - 9999 共36000位 对应2890 <= n <= 29890;
    // 比如 n = 2889 那应该是数字999 的第三个数字

    while(n > bit_count) {
        n -= bit_count; // 每次都减掉上一段的数量
        digit_count++;
        lower_bound *= 10;
        bit_count = lower_bound * 9 * digit_count; // 更新下一段的数量
    }
    // 此时n是指 lower_bound 到 10 ** (digit_count + 1) - 1这段数字序列中的第n个数字
    // 算出是这一段中具体的哪个数字
    let targetNum = Math.floor((n - 1) / digit_count) + lower_bound;
    // 这个数字的第几位(下标)
    let targetDigit = (n - 1) % digit_count;

    return +targetNum.toString()[targetDigit];

};
```
