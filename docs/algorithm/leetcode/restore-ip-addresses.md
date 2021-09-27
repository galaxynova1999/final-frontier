---
title: 93. 复原 IP 地址
---
:::tip 原题链接
[LeetCode 93](https://leetcode-cn.com/problems/restore-ip-addresses/)
:::

```typescript
function restoreIpAddresses(s: string): string[] {
    if(s.length > 12) {
        return [];
    }
    const result = [];
    const dfs = (path: string[], remainStr: string) => {
       if(path.length === 4 && path.join("") === s) {
          result.push(path.join("."));
          return;
       }
       const maxSubLen = Math.min(remainStr.length, 3) + 1;
       for(let i = 1; i < maxSubLen; i++) {
           const subStr = remainStr.substr(0, i);
           const num = parseInt(subStr, 10);
           
           if(num <= 255 && num >= 0) {
               // 每次向下传递一个新数组
               dfs(path.concat(num.toString()), remainStr.substr(i));
           }
       }
    }
    dfs([], s);
    return result;
};
```
