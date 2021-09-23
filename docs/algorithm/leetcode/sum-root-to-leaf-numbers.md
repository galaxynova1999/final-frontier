---
title: 129. 求根节点到叶节点数字之和
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/)
:::

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumNumbers(root: TreeNode | null): number {
    const resultArray = [];
    const dfs = (node: TreeNode, str: string) => {
       if(!node.left && !node.right) {
           str += node.val;
           resultArray.push(str);
           return;
       }
       if(node.left) {
           dfs(node.left, str + node.val);
       }
       if(node.right) {
           dfs(node.right, str + node.val);
       }
       
    }
    dfs(root, "");
    let answer = 0;
    
    resultArray.forEach(item => {
       answer += +item;
    })

    return answer;
};
```
