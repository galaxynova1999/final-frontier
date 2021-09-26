---
title: 124. 二叉树中的最大路径和
---
:::tip 原题链接
[LeetCode 124](https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/)
:::


```typescript
function maxPathSum(root: TreeNode | null): number {
    let answer = Number.MIN_SAFE_INTEGER;
    // 核心思路 记录以任意一个节点开始 左子树的最大和 右子树的最大和
    // 答案就是max(任意节点的值 + 左子树max + 右子树max);
    const dfs = (node: TreeNode) => {
        // 空节点贡献值为0
        if(!node) {
            return 0;
        }
        const leftSideMax = Math.max(dfs(node.left), 0);
        const rightSideMax = Math.max(dfs(node.right), 0);
        // 以当前节点的为中间节点的最大结果
        const currentPathSum = node.val + leftSideMax + rightSideMax;
        answer = Math.max(answer, currentPathSum);
        // 返回当前节点的最大贡献值(left和right只能取一边  取最大的那个)
        return node.val + Math.max(leftSideMax, rightSideMax);
    }
    dfs(root);
    return answer;
};
```
