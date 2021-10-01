---
title: 328. 奇偶链表
---

:::tip 原题链接
[LeetCode 328](https://leetcode-cn.com/problems/odd-even-linked-list/)
:::


```typescript
function oddEvenList(head: ListNode | null): ListNode | null {
    if(!head) {
        return null;
    }
 // 思路：按奇偶位拆分链表 然后再组合起来
    let evenHead = head.next;
    // 指向奇偶位的指针
    let odd = head;
    let even = evenHead;
    // 注意结束条件 只处理even结束的情况
    while(even !== null && even.next !== null) {
       odd.next = even?.next;
       odd = odd.next;

       even.next = odd?.next;
       even = even.next; 
    }

    odd.next = evenHead;
    return head;
};
```
