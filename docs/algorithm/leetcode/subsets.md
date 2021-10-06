---
title: 78. 子集
---

:::tip 原题链接
[LeetCode 78](https://leetcode-cn.com/problems/subsets/);
:::

```typescript
function subsets(nums: number[]): number[][] {
    const len = nums.length;
    const answer: number[][] = [];
    const dfs = (level: number, path: number[]) => {
        if(level === len) {
           answer.push(path.concat());
           return;
        }
        // 选当前数字
        path.push(nums[level]);
        dfs(level + 1, path);
        // 不选
        path.pop();
        dfs(level + 1, path);
    }
    dfs(0, []);
    return answer;
};
```

