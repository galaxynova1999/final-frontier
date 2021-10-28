---
title: 111. 二叉树的最小深度
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)
:::


```typescript
function minDepth(root: TreeNode | null): number {
    // 整体逻辑与最大深度相同
   if(!root) return 0;
   // 左右子树为空时 不参与计算 => 不同点
   if(!root.left && root.right) {
       return minDepth(root.right) + 1;
   }
   if(!root.right && root.left) {
       return minDepth(root.left) + 1;
   }
   return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
   
};
```

## 求最大深度

```typescript
function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
```
## 判断平衡二叉树
对于树（根节点）来说，树的高度和深度是一致的，对于每一个节点来说，高度与深度不一致
```typescript
function isBalanced(root: TreeNode | null): boolean {
     if(!root) return true;
     const getHeight = (node: TreeNode) => {
         if(!node) return 0;
         return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
     }

     return Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1 
           && isBalanced(root.left) 
           && isBalanced(root.right);
};
```
