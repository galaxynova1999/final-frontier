---
title: 300. 最长递增子序列
---
:::tip 原题链接
[LeetCode 300](https://leetcode-cn.com/problems/longest-increasing-subsequence/)
:::

### 解题思路：

- **状态定义：**
    - $dp[i]$ 的值代表 `nums` 前 $i$ 个数字的最长子序列长度，或者说以第i个数字结尾的最长上升子序列长度

- **转移方程：** 设 $j∈[0,i)$，考虑每轮计算新 $dp[i]$ 时，遍历 $[0,i)$ 列表区间，做以下判断：
    1. **当 $nums[i] > nums[j]$ 时：** 说明$nums[i]$ 可以接在 $nums[j]$ 之后（此题要求严格递增），此情况下最长上升子序列长度为 $dp[j] + 1$ ；
    2. **当 $nums[i] <= nums[j]$ 时：** 说明$nums[i]$ 无法接在 $nums[j]$ 之后，此情况上升子序列不成立，跳过。
    - 上述所有 **1情况** 下计算出的 $dp[j] + 1$ 的最大值，为直到 $i$ 的最长上升子序列长度（即 $dp[i]$ ）。实现方式为遍历 $j$ 时，每轮执行 $dp[i] = max(dp[i], dp[j] + 1)$。
    -  **转移方程：** `dp[i] = max(dp[i], dp[j] + 1) for j in [0, i)`。

- **初始状态：**
    - $dp[i]$ 所有元素置 $1$，含义是每个元素都至少可以单独成为子序列，此时长度都为 $1$。

- **返回值：**
    - 返回 $dp$ 列表最大值，即可得到全局最长上升子序列长度。

### 复杂度分析：

- **时间复杂度 $O(N^2)$ ：** 遍历计算 $dp$ 列表需 $O(N)$，计算每个 $dp[i]$ 需 $O(N)$。
- **空间复杂度 $O(N)$ ：** $dp$ 列表占用线性大小额外空间。

### 代码：

```typescript
function lengthOfLIS(nums: number[]): number {
  if(!nums || !nums.length) {
      return 0;
  }
  // dp[i] 代表以第i个数字结尾的最长上升子序列长度
  // 状态转移： dp[i] = Max(dp[j]) + 1  (0 <= j <= i)
  const dp = new Array(nums.length).fill(1);
  for(let i = 1; i < nums.length; i++) {
      for(let j = 0; j < i; j++) {
          if(nums[j] < nums[i]) {
              // 可以接在若干数字后面 但只选能使子序列长度最大的那个
              dp[i] = Math.max(dp[j] + 1, dp[i]);
          }
      }
  }

  return Math.max(...dp);
};
```


