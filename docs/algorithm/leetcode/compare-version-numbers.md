---
title: 165. 比较版本号
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/compare-version-numbers/)
:::

```typescript
function compareVersion(version1: string, version2: string): number {
    const v1 = version1.split(".");
    const v2 = version2.split(".");
    let p = 0;
    let q = 0;

    while(p < v1.length || q < v2.length) {
        const a = +v1[p] || 0;
        const b = +v2[q] || 0;

        if(a !== b) {
            return a > b ? 1 : -1;
        }
        p++;
        q++;
    }
    return 0;
};
```
