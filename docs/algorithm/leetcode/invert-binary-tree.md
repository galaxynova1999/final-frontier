---
title: 226. 翻转二叉树
---
:::tip 原题链接
[LeetCode 226](https://leetcode-cn.com/problems/invert-binary-tree/)
:::

```typescript
function invertTree(root: TreeNode | null): TreeNode | null {
   const dfs = (node: TreeNode) => {
      if(!node) {
          return null;
      }
      // 翻转当前节点的左右子树
      const revertLeft = dfs(node.left);
      const revertRight = dfs(node.right);
      // 翻转
      node.left = revertRight;
      node.right = revertLeft;
      // 返回翻转后的节点
      return node;
   }
   return dfs(root);
};
```
