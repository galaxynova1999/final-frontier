---
title: 108. 将有序数组转换为二叉搜索树
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/)
:::


```typescript
function sortedArrayToBST(nums: number[]): TreeNode | null {
  // 总是选择中间右边的数作为根节点
  const dfs = (low: number, high: number) => {
     if(low > high) return null;

     const mid = Math.floor((low + high + 1) / 2);
     const root = new TreeNode(nums[mid]);
     root.left = dfs(low, mid - 1);
     root.right = dfs(mid + 1, high);
     return root;
  }

  return dfs(0, nums.length - 1);
};
```
