---
title: 662. 二叉树最大宽度
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/maximum-width-of-binary-tree/)
:::

```typescript
function widthOfBinaryTree(root: TreeNode | null): number {
   const queue: TreeNode[] = [];
   const dictionary = new Map<TreeNode, bigint>();

   if(root) {
       queue.push(root);
       dictionary.set(root, 0n);
   }

   let answer = 0n;

   while(queue.length) {
     let len = queue.length;
     let left = dictionary.get(queue[0]);
     for(let i = 0; i < len; i++) {
         const front = queue.shift();
         const pos = dictionary.get(front);
         if(pos - left + 1n > answer) {
             answer = pos - left + 1n;
         }

         if(front.left) {
             queue.push(front.left);
             dictionary.set(front.left, pos * 2n);
         }

         if(front.right) {
             queue.push(front.right);
             dictionary.set(front.right, pos * 2n + 1n);
         }
     }
   }
   return answer as any;
};
```


```typescript
function widthOfBinaryTree(root: TreeNode | null): number {
   const queue = [];
   
   function warpNode(node: TreeNode, depth: number, pos: BigInt) {
       this.node = node;
       this.depth = depth;
       this.pos = pos
   }

   queue.push(new warpNode(root, 0, 0n));


   let curDepth = 0;

   let leftEdge = 0n;

   let answer = 0n;

   while(queue.length) {
     const front = queue.shift();
     
     if(front.node) {
       const { depth, pos } = front;  
       queue.push(new warpNode(front.node.left, depth + 1, BigInt(pos * 2n)));
       queue.push(new warpNode(front.node.right, depth + 1, BigInt(pos * 2n + 1n)));

       if(curDepth !== depth) {
           curDepth = depth;
           leftEdge = pos;
       }

       if(pos - leftEdge + 1n > answer) {
           answer = pos - leftEdge + 1n;
       }
     }
   }

   return answer as any;
};
```
