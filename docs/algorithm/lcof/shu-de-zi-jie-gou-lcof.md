---
title: 26. 树的子结构
---

:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/)
:::

:::tip
本题与第572. 另一颗树的字树 几乎一致
:::

```typescript
// 判断是否包含
function isContain(left: TreeNode | null, right: TreeNode | null): boolean  {
    if(!right) {
        return true; // 右边的树为空 可以是真
    }
    if(!left) {
        return false;
    }

    if(left.val === right.val) {
        return isContain(left.left, right.left) && isContain(left.right, right.right);
    }

    return false;

}

function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
    if(!A || !B) {
        return false;
    }
    // 找到值相同的根节点，开始判断是否包含
    if(A.val === B.val && isContain(A, B)) {
        return true;
    }

    return isSubStructure(A.left, B) || isSubStructure(A.right, B);

};
```
