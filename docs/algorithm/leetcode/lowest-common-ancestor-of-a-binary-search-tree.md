---
title: 235. 二叉搜索树的最近公共祖先
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
:::

```typescript
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	const getPath = (node: TreeNode, target: TreeNode) => {
        let answer = [];
        while(node && node !== target) {
            answer.push(node);
            if(node.val > target.val) {
                node = node.left;
            } else{
                node = node.right;
            }
        }
        answer.push(node);
        return answer;
    }

    const pathP = getPath(root, p);
    const pathQ = getPath(root, q);
    
    let i = pathP.length;
    let j = pathQ.length;
    let answer = null;

    for(let k = 0; k < i && k < j; k++) {
        if(pathP[k] === pathQ[k]) {
            answer = pathP[k];
        } else {
            break;
        }
    }

    return answer;

};
```
