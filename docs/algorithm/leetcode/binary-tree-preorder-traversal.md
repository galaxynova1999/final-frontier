---
title: 144. 二叉树的前序遍历
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/);
:::


```typescript
function preorderTraversal(root: TreeNode | null): number[] {
   let current = root;
   const stack: TreeNode[] = [];
   const answer: number[] = [];

   while(current || stack.length) {
       while(current) {
         answer.push(current.val);
         stack.push(current);
         current = current.left;   
       }
       if(stack.length) {
           current = stack.pop();
           current = current.right;
       }
   }

   return answer;
};
```
