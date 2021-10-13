---
title: 83. 删除排序链表中的重复元素
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)
:::

```typescript
function deleteDuplicates(head: ListNode | null): ListNode | null {
   let current = head;
   while(current) {
       if(current && current.val === current.next?.val) {
           let prev = current;
           while(prev && prev.next?.val === current.val) {
              prev = prev.next;
           }
          current.next = prev.next;
       }
       current = current.next;
   }
   return head;
};
```
