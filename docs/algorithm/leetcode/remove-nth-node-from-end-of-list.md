---
title: 19. 删除链表的倒数第 N 个结点
---

:::tip 原题链接
[LeetCode 19](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)
:::


```typescript
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
   // 双指针
   const dummyHead = new ListNode(0, head);
   let fast = head;
   let slow = dummyHead;
   for(let i = 0; i < n; i++) {
       fast = fast?.next;
   }
   while(fast !== null) {
       fast = fast?.next;
       slow = slow?.next
   }
   const next = slow.next?.next;
   slow.next = next;
   return dummyHead.next;
};
```
