---
title: 148. 排序链表
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/sort-list/)
:::

```typescript
function sortList(head: ListNode | null): ListNode | null {
   // 归并排序
   const merge = (a: ListNode, b: ListNode) => {
       const dummy = new ListNode(0);
       let current = dummy;
       let p = a;
       let q = b;
       while(p && q) {
           if(p.val < q.val) {
               current.next = p;
               p = p.next
           } else {
               current.next = q;
               q = q.next;
           }
           current = current.next;
       }
       if(p) {
           current.next = p;
       }
       if(q) {
           current.next = q;
       }
       return dummy.next;
   }

   const sort = (begin: ListNode) => {
       if(!begin || !begin.next) return begin;
       // 找中点
       let fast = begin;
       let slow = begin;
       while(fast.next && fast.next.next) {
           fast = fast.next.next;
           slow = slow.next
       }
       let second = slow.next;
       slow.next = null;
       
       // 递归
       const headA = sort(begin);
       const headB = sort(second);
       return merge(headA, headB);
   }

   return sort(head);
};
```
