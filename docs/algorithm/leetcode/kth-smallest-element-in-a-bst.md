---
title: 230. 二叉搜索树中第K小的元素
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/);
:::

```typescript
function kthSmallest(root: TreeNode | null, k: number): number {
  // 中序遍历
  let answer = 0;
  const dfs = (node: TreeNode) => {
      if(!node) return ;

      dfs(node.left);

      if(k === 0) return;
      if(--k === 0) {
          answer = node.val;
          return;
      }

      dfs(node.right);
  }
   dfs(root);
   return answer;
};
```
