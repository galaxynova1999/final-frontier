---
title: 剑指 Offer 54. 二叉搜索树的第k大节点
---


:::tip 原题链接
[剑指Offer](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/);
:::

```typescript
function kthLargest(root: TreeNode | null, k: number): number {
   // 倒序中序遍历 获取第k个
   let answer = Infinity;
   const dfs = (node: TreeNode, n: number) => {
       if(!node) return;
       if(n === 0) return;

       dfs(node.right, k - 1);

       if(--k === 0) {
           return node.val;
       }

       dfs(node.left, k - 1);
   }

   dfs(root, k);
   return answer;
};
```
