---
title: 61. 旋转链表
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/rotate-list/)
:::

```typescript
function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if(!head || !k) return head;
  let fast = head;
  let slow = head;

  let count = 0;
  for(let current = head; current; current = current.next) {
      count++;
  }

  if(k % count === 0) return head;

  for(let i = 0; i < (k % count); i++) {
    fast = fast.next;
  }

  while(fast && fast.next) {
      slow = slow.next;
      fast = fast.next;
  }

  const next = slow.next;
  slow.next = null; // 断开
  fast.next = head;

  return next;
};
```
