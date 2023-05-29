---
title: 91. 解码方法
---

:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/decode-ways/)
:::


```typescript
function numDecodings(s: string): number {
    const dp: number[] = new Array(s.length).fill(0);

    // 边界从1开始更好处理
    dp[0] = s[0] === '0' ? 0 : 1;// 边界条件

    for (let i = 1; i < s.length; i++) {
        const parsedIndex = parseInt(`${s[i - 1]}${s[i]}`, 10);
        // 特殊情况越界  处理下
        const lastTwo = i - 2;
       if(s[i] === '0') {
           if(parsedIndex >= 10 && parsedIndex <= 26) {
               // 只有一种可能就是和前一个数组组合成一个
               dp[i] = lastTwo >= 0 ? dp[lastTwo] : 1;
           }
       } else {
           // 有两种可能
           dp[i] += dp[i - 1]; // 单独使用这一位数组
           if(parsedIndex >= 10 && parsedIndex <= 26) {
               dp[i] += lastTwo >= 0 ? dp[lastTwo] : 1; // 和前一位一起用 方法数
           }
       }
    }

    return dp[s.length - 1];

};
```
