---
title: 113. 路径总和2
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/path-sum-ii/submissions/)
:::


```typescript
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
   const result: number[][] = [];
   const dfs = (node: TreeNode, val: number, walker: number[]) => {
       if(!node) {
           return;
       }
       if(!node.left && !node.right && val + node.val === targetSum) {
           result.push(walker.concat(node.val));
           return;
       }
       if(node.left) {
           dfs(node.left, val + node.val, walker.concat(node.val));
       }
       if(node.right) {
           dfs(node.right, val + node.val, walker.concat(node.val));
       }
   }
   dfs(root, 0, []);
   return result;
};
```
