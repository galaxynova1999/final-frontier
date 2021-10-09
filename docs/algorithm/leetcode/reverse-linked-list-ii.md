---
title: 92. 反转链表 II
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/reverse-linked-list-ii/);
:::


```typescript
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    // 不需要返回尾巴
   const reverse = (l: ListNode, r: ListNode) => {
      let prev = r.next;
      let current = l;
      while(current && prev !== r) {
         const next = current.next;
         current.next = prev;
         prev = current;
         current = next;
      };
      
   }

   let dummy = new ListNode(0, head);

   let ll = dummy;
   let rr = dummy;
    // 左节点前一个节点
   for(let i = 0; i < left - 1 ; i++) {
       ll = ll.next;
   }
   // 右节点
   for(let i = 0; i < right; i++) {
       rr = rr.next;
   }
  
   reverse(ll.next, rr);
   
   ll.next = rr;


   return dummy.next;
};
```
