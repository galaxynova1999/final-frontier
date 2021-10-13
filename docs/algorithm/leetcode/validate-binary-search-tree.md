---
title: 98. 验证二叉搜索树
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/validate-binary-search-tree/)
:::

```typescript
// 或者中序排序
function isValidBST(root: TreeNode | null): boolean {
   const valid = (node: TreeNode, max: number, min: number) => {
       if(!node) return true;
       if(node.val <= min || node.val >= max) {
           return false;
       }
       return valid(node.left, node.val, min) && valid(node.right, max, node.val);
   } 

   return valid(root, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
};
```
