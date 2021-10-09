---
title: 145. 二叉树的后序遍历


---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/);
:::

```typescript
function postorderTraversal(root: TreeNode | null): number[] {
   let current = root;
   const answer = [];
   const stack = [];

   let prev = null;
   while(current || stack.length) {
       while(current) {
           stack.push(current);
           current = current.left;
       }

       if(stack.length) {
           current = stack.pop();
       }
       if(!current.right || current.right === prev) {
         // 没有右子树 或者 右子树已经访问完毕
         answer.push(current.val);
         prev = current;
         current = null;
       } else {
          stack.push(current); // 有右子树 再重新保存下 待会返回后来用
          current = current.right; 
       }
   }

   return answer;
};
```
