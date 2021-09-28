---
title: 951. 翻转等价二叉树
---
:::tip 原题链接
[LeetCode 951](https://leetcode-cn.com/problems/flip-equivalent-binary-trees/)
:::

```typescript
function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
   const isEquiv = (root: TreeNode, another: TreeNode) => {
      // 都为空 true 
      if(!root && !another) {
          return true;
      }
      if(root === null || another === null || root.val !== another.val) {
          return false;
      }

      return (
         // 判断同方向的能否通过翻转得到 
        (
          isEquiv(root.left, another.left) &&
          isEquiv(root.right, another.right)
        ) 
        ||
        (
          // 判断不同方向的能够通过翻转得到  
          isEquiv(root.left, another.right) &&
          isEquiv(root.right, another.left)
        ))
   }

   return isEquiv(root1, root2);
};
```
