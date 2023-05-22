---
title: 543. 二叉树的直径
---
:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/diameter-of-binary-tree/)
:::

```typescript
function diameterOfBinaryTree(root: TreeNode | null): number {
    // 某一个节点的直径等于左右字树的深度之和
    // 遍历时求出最大值即可
    let maxLength = 0;

    const dfs = (node: TreeNode | null) => {
        // 寻找左右节点中的最大深度
        if(!node) {
            return 0;
        }

        const leftDepth = dfs(node.left);
        const rightDepth = dfs(node.right);

        maxLength = Math.max(maxLength, leftDepth + rightDepth);

        return Math.max(leftDepth, rightDepth) + 1;
    }

    dfs(root);

    return maxLength;
};
```
