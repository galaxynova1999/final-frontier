---
title: 206. 翻转链表
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/reverse-linked-list/)
:::

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
   let prev = null;
   let current = head;
   while(current !== null) {
       // 暂存next
       const next = current.next;
       // next指向前一个
       current.next = prev;
       // prev指向当前这一个
       prev = current;
       // current移动到暂存的原始的next
       current = next;
   }
   // 返回最后的prev指针
   return prev;
};
```
