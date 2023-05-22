---
title: 139. 单词拆分
---
:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/word-break/)
:::

```typescript
function wordBreak(s: string, wordDict: string[]): boolean {
    const wordsSet = new Set(wordDict);
    const dp: boolean[] = new Array(s.length + 1).fill(false); // i表示前i个字符能否由wordDict构成
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            // i下标的不包含
            if(dp[j] && wordsSet.has(s.substring(j, i))) {
                dp[i] = true;
                // 提前退出 优化
                break;
            }
        }
    }
    return dp[s.length];
};
```
