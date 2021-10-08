---
title: 673. 最长递增子序列的个数
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/);
:::


### 动态规划

**思路与算法**

定义 $\textit{dp}[i]$ 表示以 $\textit{nums}[i]$ 结尾的最长上升子序列的长度，$\textit{cnt}[i]$ 表示以 $\textit{nums}[i]$ 结尾的最长上升子序列的个数。设 $\textit{nums}$ 的最长上升子序列的长度为 $\textit{maxLen}$，那么答案为所有满足 $\textit{dp}[i]=\textit{maxLen}$ 的 $i$ 所对应的 $\textit{cnt}[i]$ 之和。

我们从小到大计算 $\textit{dp}$ 数组的值，在计算 $\textit{dp}[i]$ 之前，我们已经计算出 $\textit{dp}[0 \ldots i-1]$ 的值，则状态转移方程为：

$$
\textit{dp}[i] = \max(\textit{dp}[j]) + 1, \text{其中} \, 0 \leq j < i \, \text{且} \, \textit{num}[j]<\textit{num}[i]
$$

即考虑往 $\textit{dp}[0 \ldots i-1]$ 中最长的上升子序列后面再加一个 $\textit{nums}[i]$。由于 $\textit{dp}[j]$ 代表 $\textit{nums}[0 \ldots j]$ 中以 $\textit{nums}[j]$ 结尾的最长上升子序列，所以如果能从 $\textit{dp}[j]$ 这个状态转移过来，那么 $\textit{nums}[i]$ 必然要大于 $\textit{nums}[j]$，才能将 $\textit{nums}[i]$ 放在 $\textit{nums}[j]$ 后面以形成更长的上升子序列。

对于 $\textit{cnt}[i]$，其等于所有满足 $\textit{dp}[j]+1=\textit{dp}[i]$ 的 $\textit{cnt}[j]$ 之和。在代码实现时，我们可以在计算 $\textit{dp}[i]$ 的同时统计 $\textit{cnt}[i]$ 的值。


**复杂度分析**

- 时间复杂度：$O(n^2)$，其中 $n$ 是数组 $\textit{nums}$ 的长度。

- 空间复杂度：$O(n)$。


```typescript
function findNumberOfLIS(nums: number[]): number {
  const dp = new Array(nums.length).fill(1);
  const count = new Array(nums.length).fill(1);
  let maxLen = 0;
  let ans = 0;
  for(let i = 0; i < nums.length; i++) {

      for(let j = 0; j < i; j++) {
          if(nums[j] < nums[i]) {
              if(dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1; // 原始 dp 的转移方程
                count[i] = count[j];
              } else if(dp[j] + 1 === dp[i]) {
                 count[i] += count[j];
              }
          }  
      }

      if(dp[i] > maxLen) {
          maxLen = dp[i];
          ans = count[i];
      } else if(dp[i] === maxLen){
          ans += count[i];
      }
  }
  return ans;
};
```
