---
title: 450. 删除二叉搜索树中的节点
---


:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/delete-node-in-a-bst/);
:::

```typescript
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {

   const dfs = (node: TreeNode) => {
      if(!node) return null; 

      if(node.val === key) {
         // 叶子节点 直接删除 
         if(!node.left && !node.right) node = null;

        // 右子树为空 返回左子树
         else if(node.right === null) return node.left;

        // 同理
         else if(node.left === null) return node.right; 

        // 左右子树都不为空 把左子树接到右子树的最左节点上
         else {
             let temp = node.right;
             while(temp.left !== null) {
                 temp = temp.left;
             }
             temp.left = node.left;

             // 删除当前节点，返回右子树
             return node.right;
         }
      }

      else if(node.val > key) {
          node.left = dfs(node.left);
      }

      else {
          node.right = dfs(node.right);
      }
      

      return node;
   }

   return dfs(root);
};
```
