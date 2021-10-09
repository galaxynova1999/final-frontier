---
title: 105. 从前序与中序遍历序列构造二叉树
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/);
:::

### 递归

**思路**

对于任意一棵树而言，前序遍历的形式总是

```
[ 根节点, [左子树的前序遍历结果], [右子树的前序遍历结果] ]
```

即根节点总是前序遍历中的第一个节点。而中序遍历的形式总是

```
[ [左子树的中序遍历结果], 根节点, [右子树的中序遍历结果] ]
```

只要我们在中序遍历中**定位**到根节点，那么我们就可以分别知道左子树和右子树中的节点数目。由于同一颗子树的前序遍历和中序遍历的长度显然是相同的，因此我们就可以对应到前序遍历的结果中，对上述形式中的所有**左右括号**进行定位。

这样以来，我们就知道了左子树的前序遍历和中序遍历结果，以及右子树的前序遍历和中序遍历结果，我们就可以递归地对构造出左子树和右子树，再将这两颗子树接到根节点的左右位置。

**细节**

在中序遍历中对根节点进行定位时，一种简单的方法是直接扫描整个中序遍历的结果并找出根节点，但这样做的时间复杂度较高。我们可以考虑使用哈希表来帮助我们快速地定位根节点。对于哈希映射中的每个键值对，键表示一个元素（节点的值），值表示其在中序遍历中的出现位置。在构造二叉树的过程之前，我们可以对中序遍历的列表进行一遍扫描，就可以构造出这个哈希映射。在此后构造二叉树的过程中，我们就只需要 $O(1)$ 的时间对根节点进行定位了。



**复杂度分析**

- 时间复杂度：$O(n)$，其中 $n$ 是树中的节点个数。

- 空间复杂度：$O(n)$，除去返回的答案需要的 $O(n)$ 空间之外，我们还需要使用 $O(n)$ 的空间存储哈希映射，以及 $O(h)$（其中 $h$ 是树的高度）的空间表示递归时栈空间。这里 $h < n$，所以总空间复杂度为 $O(n)$。


```typescript
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const hash = new Map<number, number>();
    const len = preorder.length - 1;

    inorder.forEach((item, index) => {
        hash.set(item, index);
    })

   
    const build = (pre_left: number, pre_right: number, in_left: number, in_right: number) => {
       if(pre_left > pre_right) {
           return null;
       }
       // 前序遍历的第一个节点就是根节点
       const root = pre_left;
       // 去中序遍历中查对应下标
       const index = hash.get(preorder[root]);

       // 创建根节点
       const root_node = new TreeNode(preorder[root]);

       // 左子树数目
       const left_sub_size = index - in_left;
        // 先序遍历中「从 左边界 + 1 开始的 left_sub_size」个元素就对应了中序遍历中「从 左边界 开始到 根节点定位 - 1」的元素
       root_node.left = build(pre_left + 1, pre_left + left_sub_size, in_left, index - 1);
        // 先序遍历中「从 左边界 + 1 + 左子树节点数目 开始到 右边界」的元素就对应了中序遍历中「从 根节点定位 + 1 到 右边界」的元素
       root_node.right = build(pre_left + left_sub_size + 1, pre_right, index + 1, in_right);

       return root_node;

    }

    return build(0, len, 0, len);
};
```
