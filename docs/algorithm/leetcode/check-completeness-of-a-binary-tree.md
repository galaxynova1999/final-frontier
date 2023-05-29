---
title: 958. 二叉树的完全性检验
---

:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/check-completeness-of-a-binary-tree/)
:::

```typescript
function isCompleteTree(root: TreeNode | null): boolean {
    if(!root) {
        return true;
    }
    const queue: TreeNode[] = [];
    queue.push(root);

    while(queue.length) {
        const length = queue.length; // 这一层的数量
        for (let i = 0; i < length; i++) {
            const front = queue.shift();
            if(front === null) {
                // 当遍历到第一个空节点时，不允许它的右边还有非空节点
                if(queue.some(node => node !== null)) {
                    return false;
                }
            } else {
                queue.push(front.left);
                queue.push(front.right);
            }
        }
    }

    return true;
};
```
