---
title: 94. 二叉树的中序遍历
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/);
:::


```typescript
function inorderTraversal(root: TreeNode | null): number[] {
   // 使用栈模拟
    let current = root;
    const stack = [];
    const answer = [];
    while(current !== null || stack.length !== 0) {
        while(current) {
            stack.push(current);
            current = current.left;
        }
        if(stack.length !== 0) {
            current = stack.pop();
            answer.push(current.val);
            current = current.right;
        }
    }
    return answer;
};
```
