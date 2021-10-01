---
title: 21. 合并两个有序链表
---
:::tip 原题链接
[LeetCode 21](https://leetcode-cn.com/problems/merge-two-sorted-lists/)
:::


```typescript
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let h1 = l1;
    let h2 = l2;
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    while(h1 !== null && h2 !== null) {
        const v1 = h1.val;
        const v2 = h2.val;
        if(v1 < v2) {
            current.next = h1;
            h1 = h1.next;
        } else {
            current.next = h2;
            h2 = h2.next;
        }
        current = current.next;
    }
    if(h1 !== null) {
        current.next = h1;
    } else if(h2 !== null) {
        current.next = h2;
    }
    return dummyHead.next;
};
```
