---
title: 2. 两数相加
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/add-two-numbers/);
:::

```typescript
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
   const dummy = new ListNode(0);
   let a = l1;
   let b = l2;
   let extra = 0;
   let current = dummy;
   while(a || b) {
       const va = a?.val ?? 0;
       const vb = b?.val ?? 0;

       const sum = va + vb + extra;
       current.next = new ListNode(sum % 10);
       extra = Math.floor(sum / 10);
       current = current.next;
       if(a) a = a.next;
       if(b) b = b.next;
   }

   if(extra) {
       current.next = new ListNode(extra);
   }
   return dummy.next;
};
```
