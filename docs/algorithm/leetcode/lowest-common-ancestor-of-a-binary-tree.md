---
title: 236. 二叉树的最近公共祖先
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/);
:::

```typescript
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	const father = new Map<TreeNode, TreeNode>();
    const visited = new Map<TreeNode, boolean>();
    father.set(root, null);

    const dfs = (node: TreeNode) => {
        if(node.left) {
            father.set(node.left, node);
            dfs(node.left);
        }
        if(node.right) {
            father.set(node.right, node);
            dfs(node.right);
        }
    }

    dfs(root);
    while(p) {
            visited.set(p, true);
            p = father.get(p);
    }

    while(q) {
        if(visited.get(q)) return q;
        q = father.get(q);
    }

    return null;

};
```
