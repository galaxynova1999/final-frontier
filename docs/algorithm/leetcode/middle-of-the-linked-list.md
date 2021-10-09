---
title: 876. 链表的中间结点
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/middle-of-the-linked-list/);
:::


```typescript
function middleNode(head: ListNode | null): ListNode | null {
  // 1.转成数组 2.两次遍历
  // 3. 双指针

  let slow = head;
  let fast = head;

  while(fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next
  }

  return slow;
};
```
