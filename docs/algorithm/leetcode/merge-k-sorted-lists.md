---
title: 23. 合并 K 个升序链表
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/merge-k-sorted-lists/)
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
   if(!lists || !lists.length) return null; 
   const merge = (a: ListNode, b: ListNode) => {
       const dummy = new ListNode(0);
       let p = a;
       let q = b;
       let current = dummy;
       while(p && q) {
           if(p.val < q.val) {
               current.next = p;
               p = p.next
           } else {
               current.next = q;
               q = q.next
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


   const split = (l: number, r: number) => {
      if(l === r) return lists[l];
      if(l > r) return null;
      const mid = Math.floor((l + r) >> 1);
      return merge(split(l, mid), split(mid + 1, r));
   }

   return split(0, lists.length - 1);
};
```
