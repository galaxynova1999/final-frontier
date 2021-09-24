---
title: 199. 二叉树的右视图
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/binary-tree-right-side-view/)
:::


```typescript
function rightSideView(root: TreeNode | null): number[] {
 // 有两种方法 一种是使用bfs 记录下每一层的最后一个元素
 // 也可以使用dfs 按照中 -> 右 -> 左的顺序 保证每一层都都是最先访问到最右边的节点
    const res = [];
    const dfs = (node: TreeNode, depth: number) => {
        if(!node) {
            return;
        }
        // 当depth等于res的长度时  代表这一层还没有元素被访问到 那么当前元素就是这一层的最右边的元素
        if(depth === res.length) {
            res.push(node.val);
        }
        depth++;
        // 先右后左
        dfs(node.right, depth);
        dfs(node.left, depth);
    }
    dfs(root, 0);
    return res;
};
```
