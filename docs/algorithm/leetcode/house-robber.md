---
title: 198. 打家劫舍
---
:::tip 原题链接
[LeetCode 198](https://leetcode-cn.com/problems/house-robber/);
:::


首先考虑最简单的情况。如果只有一间房屋，则偷窃该房屋，可以偷窃到最高总金额。如果只有两间房屋，则由于两间房屋相邻，不能同时偷窃，只能偷窃其中的一间房屋，因此选择其中金额较高的房屋进行偷窃，可以偷窃到最高总金额。

如果房屋数量大于两间，应该如何计算能够偷窃到的最高总金额呢？对于第 $k~(k>2)$ 间房屋，有两个选项：

1. 偷窃第 $k$ 间房屋，那么就不能偷窃第 $k-1$ 间房屋，偷窃总金额为前 $k-2$ 间房屋的最高总金额与第 $k$ 间房屋的金额之和。

2. 不偷窃第 $k$ 间房屋，偷窃总金额为前 $k-1$ 间房屋的最高总金额。

在两个选项中选择偷窃总金额较大的选项，该选项对应的偷窃总金额即为前 $k$ 间房屋能偷窃到的最高总金额。

用 $\textit{dp}[i]$ 表示前 $i$ 间房屋能偷窃到的最高总金额，那么就有如下的状态转移方程：

$$
\textit{dp}[i] = \max(\textit{dp}[i-2]+\textit{nums}[i], \textit{dp}[i-1])
$$

边界条件为：

$$
\begin{cases}
\textit{dp}[0] = \textit{nums}[0] & \text{只有一间房屋，则偷窃该房屋} \\
\textit{dp}[1] = \max(\textit{nums}[0], \textit{nums}[1]) & \text{只有两间房屋，选择其中金额较高的房屋进行偷窃}
\end{cases}
$$

最终的答案即为 $\textit{dp}[n-1]$，其中 $n$ 是数组的长度。

**复杂度分析**

* 时间复杂度：$O(n)$，其中 $n$ 是数组长度。只需要对数组遍历一次。

* 空间复杂度：$O(1)$。使用滚动数组，可以只存储前两间房屋的最高总金额，而不需要存储整个数组的结果，因此空间复杂度是 $O(1)$。

```typescript
function rob(nums: number[]): number {
    if(!nums.length) {
        return 0;
    }
    if(nums.length === 1) {
        return nums[0];
    }
   const dp = [];
   dp[0] = nums[0];
   dp[1] = nums[0] > nums[1] ? nums[0] : nums[1];

   for(let i = 2; i < nums.length; i++) {
       dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
   }

   return dp[nums.length - 1];
};
```
