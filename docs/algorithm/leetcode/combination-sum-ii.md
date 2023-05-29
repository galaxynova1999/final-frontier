---
title: 40. 组合总和-2
---

:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/combination-sum-ii/)
:::


```typescript
function combinationSum2(candidates: number[], target: number): number[][] {
    // 排序 达到去重的目的
    candidates.sort((a, b) => a - b);
    while(candidates[candidates.length - 1] > target) {
        candidates.pop(); // 去掉那些不可能的
    }
    const answer: number[][] = [];
    const dfs = (index: number, sum: number, path: number[]) => {
        if(sum === target) {
            answer.push(path.concat());
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            // 去重
            if(i - 1 >= index && candidates[i] === candidates[i - 1]) {
                continue;
            }
            // 剪枝
            if(sum + candidates[i] > target) {
                continue;
            }
            path.push(candidates[i]);
            dfs(i + 1, sum + candidates[i], path);
            path.pop();
        }
    }

    dfs(0, 0, []);
    return answer;
};
```
