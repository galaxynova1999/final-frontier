---
title: 112. 路径总和
---
:::tip 原题链接
[LeetCode 112](https://leetcode-cn.com/problems/path-sum/)
:::


```typescript
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if(!root) {
        return false;
    }
    let answer = false;
    const dfs = (node: TreeNode, sum: number) => {
        if(!node.left && !node.right) {
            if(sum - node.val === 0) {
               answer = true;
               return;
            } 
        }
        if(node.left && !answer) {
            dfs(node.left, sum - node.val);
        }

        if(node.right && !answer) {
            dfs(node.right, sum - node.val);
        }
    }
    dfs(root, targetSum);
    return answer
};
```
