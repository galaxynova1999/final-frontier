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
    const dfs = (node: TreeNode) => {
        if(!node) return;

        dfs(node.right);

        if(k === 0) return;
        if(--k === 0) {
            answer = node.val;
            return;
        }

        dfs(node.left);
    }

    dfs(root);
    return answer;
};
```
