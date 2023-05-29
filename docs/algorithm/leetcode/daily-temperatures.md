---
title: 739. 每日温度
---
:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/daily-temperatures/)
:::

:::tip
和第496. 下一个更大元素 I 是同样的解法 单调栈
:::

```typescript
function dailyTemperatures(temperatures: number[]): number[] {
    const stack: number[] = [];
    const answer: number[] = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while(stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            answer[stack[stack.length - 1]] = i - stack[stack.length - 1];
            stack.pop();
        }
        stack.push(i);
    }

    return answer;
};
```
