---
title: 876. 链表的中间结点
---


:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/reorder-list/);
:::


```typescript
function reorderList(head: ListNode | null): void {
  // 1.转成数组 或者 用map记录
  // 2. 找到中点 + 翻转 + 合并

  const findMiddle = (node: ListNode) => {
        let slow = node;
        let fast = node;

        while(fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
  }

  const reverse = (node: ListNode) => {
      let prev = null;
      let current = node;

      while(current) {
          const next = current.next;
          current.next = prev;
          prev = current;
          current = next;
      }

      return prev; // 新的头结点
  }

  const merge = (a: ListNode, b: ListNode) => {
     let p = null;
     let q = null;
     while(a && b) {
        p = a.next;
        q = b.next;

        a.next = b;
        a = p;

        b.next = a;
        b = q;
     }
  }
  if(!head) {
      return null;
  }

  const mid = findMiddle(head);
  
  const first = head;
  let second = mid.next;

  // 关键一步 断开链表！！！
  mid.next = null;
  // 翻转
  second = reverse(second);
  
  merge(first, second); 

};
```
