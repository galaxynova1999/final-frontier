---
title: 135. 分发糖果
---

:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/candy/)
:::

```typescript
function candy(ratings: number[]): number {
    // 从左到右 从右到左分别计算两种情况下的最小值 答案就是两者的最大值
    let leftResult = new Array<number>(ratings.length).fill(1);
    for (let i = 1; i < ratings.length; i++) {
        const prev = ratings[i - 1];
        const current = ratings[i];

        if(current > prev) {
            leftResult[i] = leftResult[i - 1] + 1;
        }
    }

    let result = 0;

    let rightResult = new Array<number>(ratings.length).fill(1);

    for (let i = ratings.length - 2; i >= 0; i--) {
        const next = ratings[i + 1];
        const current = ratings[i];

        if(current > next) {
            rightResult[i] = rightResult[i + 1] + 1;
        }
    }

    for (let i = 0; i < ratings.length; i++) {
        result += Math.max(leftResult[i], rightResult[i]);
    }

    return result;
};
```
