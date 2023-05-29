---
title: 402. 移掉K位数字
---
:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/remove-k-digits/)
:::

```typescript
function removeKdigits(num: string, k: number): string {
    const stack: number[] = [];
    let deleteCount = 0;

    // 单调不降的序列就是最小的
    for (let i = 0; i < num.length; i++) {
        while(
            stack.length &&
            deleteCount < k &&
            stack[stack.length - 1] > parseInt(num[i])
        ) {
            stack.pop();
            deleteCount++;
        }

        stack.push(parseInt(num[i]));
    }

    // 前面已经是单调不降的了 删前面的没用 要删后面的才是最小的
    while(deleteCount < k) {
        stack.pop();
        deleteCount++;
    }

    // 去掉前导零
    while(stack[0] === 0) {
        stack.shift();
    }

    return stack.length ? stack.join('') : '0';
};
```
