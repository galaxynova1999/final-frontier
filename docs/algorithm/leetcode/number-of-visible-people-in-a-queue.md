---
title: 1944. 队列中可以看到的人数
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/number-of-visible-people-in-a-queue/)
:::

```typescript
function canSeePersonsCount(heights: number[]): number[] {
    // 单调栈 
    const answer = new Array(heights.length).fill(0);
    const stack = [];
    // 倒序遍历
    for(let i = heights.length - 1; i >= 0; i--) {
        // 当前比栈顶的高 那么在i左侧的 都看不到栈顶这个元素了 可以直接出栈 不再考虑
        while(stack.length && heights[i] > stack[stack.length - 1]) {
            stack.pop();
            answer[i]++;// 记录下 i是可以看到比他矮的
        } 
        if(stack.length) { // 如果栈里还有比i高的
            answer[i]++; // i 可以看到
        }
        stack.push(heights[i]); // 记录一下
    }
    return answer;
};
```
