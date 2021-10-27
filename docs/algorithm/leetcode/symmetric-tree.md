---
title: 101. 对称二叉树
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/symmetric-tree/)
:::

```typescript
function isSymmetric(root: TreeNode | null): boolean {
   const helper = (left: TreeNode, right: TreeNode) => {
       if(!left && !right) return true;
       if(!left || !right) return false;

       return left.val === right.val && helper(left.left, right.right) && helper(left.right, right.left);
   }

   return helper(root, root);
};
```
