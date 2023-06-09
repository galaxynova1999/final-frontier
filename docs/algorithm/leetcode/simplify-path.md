---
title: 71. 简化路径
---
:::tip 原题链接
[LeetCode 71](https://leetcode.cn/problems/simplify-path/)
:::

```typescript
function simplifyPath(path: string): string {
    const stack: string[] = [];

    const names: string[] = path.split('/').filter(Boolean); // 全部分割开

    for (let i = 0; i < names.length; i++) {
        const name = names[i];

        if(name === '..') {
            stack.pop();
        } else {
            // 一个点就表示当前目录 都不用管
            if(name !== '.') {
                stack.push(name);
            }
        }
    }

    return '/' + stack.join('/');
};
```
