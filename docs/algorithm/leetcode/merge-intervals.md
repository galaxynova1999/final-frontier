---
title: 56. 合并区间
---
:::tip 原题链接
[LeetCode 56](https://leetcode-cn.com/problems/merge-intervals/)
:::

```typescript
function merge(intervals: number[][]): number[][] {
    const result = [];
    // 先按照第一个数字排序
    intervals.sort((a, b) => {
        return a[0] - b[0];
    })
    result.push(intervals[0]);
    for(let i = 1; i < intervals.length; i++) {
        const [begin,_end] = intervals[i];
        const [_begin,end] = result[result.length - 1];
        if(begin <= end) {
            result.pop();
            result.push([_begin, Math.max(end, _end)]);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
};
```
