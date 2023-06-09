---
title: 106. 从中序与后序遍历序列构造二叉树
---

:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/);
:::


```typescript
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {

    let postEnd = postorder.length - 1; // 后序遍历的最后一个节点就是根节点
    const helper = (left: number, right: number) => {
        if(left > right) {
            return null;
        }

        // 从后序遍历中提取根节点
        const root = new TreeNode(postorder[postEnd]);

        // 从中序遍历中找到这个节点 一分为二为左右字树
        // 此处可以优化为使用map来存储 降低查找时间为O(1)
        const splitIndex = inorder.indexOf(root.val);
        postEnd--;

        root.right = helper(splitIndex + 1, right);
        root.left = helper(left, splitIndex - 1);
        return root;
    }

    return helper(0, inorder.length - 1);
};
```
