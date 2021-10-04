---
title: 102. 二叉树的层序遍历
---
:::tip 原题链接
[LeetCode 102](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)
:::


```typescript
function levelOrder(root: TreeNode | null): number[][] {
      if(!root) {
          return [];
      }

      const queue = [root];
      const answer = [];
     
      while(queue.length) {
          const levelLen = queue.length;
          const level = [];
          for(let i = 0; i < levelLen; i++) {
              const front = queue.shift();
              level.push(front.val);
              if(front.left) {
                  queue.push(front.left);
              }
              if(front.right) {
                  queue.push(front.right);
              }
          }
          answer.push(level);
      }
      return answer;
};
```
