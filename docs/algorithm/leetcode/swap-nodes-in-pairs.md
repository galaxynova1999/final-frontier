---
title: 24. 两两交换链表中的节点
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)
:::

```typescript
function swapPairs(head: ListNode | null): ListNode | null {
    if(!head) return null;
    const dummy = new ListNode(0, head);
    let current = dummy;

    while(current.next && current.next?.next) {
        const first = current.next;
        const second = current.next?.next;

        current.next = second; // 连接两对

        const next = second.next;
        second.next = first;
        first.next = next;

        current = first;
    }
    return dummy.next;
};
```
