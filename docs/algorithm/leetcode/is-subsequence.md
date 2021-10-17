---
title: 392. 判断子序列
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/is-subsequence/)
:::


```typescript
function isSubsequence(s: string, t: string): boolean {
    // 只需要s中的每一个字符都按顺序出现在t中即可
    let i = 0;
    let j = 0;
    let p = s.length;
    let q = t.length;

    while(i < p && j < q) {
        if(s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === p;
};
```
