---
title: 191. 位1的个数
---
:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/number-of-1-bits/)
:::

```typescript
function hammingWeight(n: number): number {
    // 用2的i次方去于 只有对应位置上是1 结果才不为0

    let answers = 0;
    // 1 << 0 === 000000....0001
    // 1 << 3 === 000000....1000

    for (let i = 0; i < 32; i++) {
        if(n & (1 << i)) {
            answers++;
        }
    }

    return answers;
};
```
