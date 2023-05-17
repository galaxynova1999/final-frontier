---
title: 442. 数组中重复的数据
---

:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/find-all-duplicates-in-an-array/)
:::

**思路与算法**

我们也可以给 $\textit{nums}[i]$ 加上「负号」表示数 $i+1$ 已经出现过一次。具体地，我们首先对数组进行一次遍历。当遍历到位置 $i$ 时，我们考虑 $\textit{nums}[\textit{nums}[i] - 1]$ 的正负性：

- 如果 $\textit{nums}[\textit{nums}[i] - 1]$ 是正数，说明 $\textit{nums}[i]$ 还没有出现过，我们将 $\textit{nums}[\textit{nums}[i] - 1]$ 加上负号；

- 如果 $\textit{nums}[\textit{nums}[i] - 1]$ 是负数，说明 $\textit{nums}[i]$ 已经出现过一次，我们将 $\textit{nums}[i]$ 放入答案。

**细节**

由于 $\textit{nums}[i]$ 本身可能已经为负数，因此在将 $\textit{nums}[i]$ 作为下标或者放入答案时，需要取绝对值。

**复杂度分析**

- 时间复杂度：$O(n)$。我们只需要对数组 $\textit{nums}$ 进行一次遍历。

- 空间复杂度：$O(1)$。返回值不计入空间复杂度。

```typescript
function findDuplicates(nums: number[]): number[] {
    const answer: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        const abs = Math.abs(nums[i]);
        const target = nums[abs - 1];
        if(target > 0) {
            // 说明nums[i] 还没有出现过
            nums[abs - 1] = -target;
        } else {
            answer.push(abs);
        }
    }
    return answer;
};
```
