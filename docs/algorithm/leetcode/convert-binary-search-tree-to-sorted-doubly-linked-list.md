---
title: 426. 将二叉搜索树转化为排序的双向链表
---

:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/)
:::

```typescript
function treeToDoublyList(root: Node | null): Node | null {
    if(!root) {
        return null;
    }
	let last: Node; // 最大的节点
    let smallest: Node;

    const dfs = (node: Node) => {
        if(node !== null) {
            // 中序遍历
            dfs(node.left);
            if(last) {
                last.right = node;
                node.left = last;
            } else {
                // 此时没有左节点 为最小值
                // 只会执行一次
                smallest = node;
            }
            last = node;
            dfs(node.right);
        }
    }
    dfs(root);
    // 连接起来
    last.right = smallest;
    smallest.left = last;
    return smallest;
};
```
