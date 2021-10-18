---
title: 38. 外观数列
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/count-and-say/)
:::

```typescript
function countAndSay(n: number): string {
    let str = '1';
    for(let i = 2; i <= n; i++) {
        const sub = [];
        let j = 0;
        let start = 0;
        while(j < str.length) {
            while(j < str.length && str[j] === str[start]) {
                j++;
            }
            sub.push(`${j - start}${str[start]}`);
            start = j;
        }
        str = sub.join("");
    }

    return str;

};
```
