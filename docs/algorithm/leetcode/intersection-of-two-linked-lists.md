---
title: 160. 相交链表
---
:::tip 原题链接
[LeetCode 160](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/)
:::


```typescript
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    // 核心思想 共有长度为c 独立的长度为a、b
    // 则有 a + c !== b + c
    // 但有 a + c + b === b + c + a
    // pa pb 两个指针都走完 a + b + c 个节点之后 必然同时指向同一个节点 或同时指向null

    if(!headA || !headB) {
      return null;
    }
    let pa = headA;
    let pb = headB;

    while(pa !== pb) {
        pa = pa ? pa.next : headB;
        pb = pb ? pb.next : headA;
    }
    return pa;
};
```
