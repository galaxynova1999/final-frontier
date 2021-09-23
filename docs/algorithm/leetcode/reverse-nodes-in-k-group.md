---
title: 25. K 个一组翻转链表
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  
  // 翻转一个区间内的链表
  const reverseListPart = (head: ListNode, tail: ListNode) => {
     let prev = tail.next; // head 1 tail 2 tail.next 3

     let current = head;
     // 只处理到tail这个节点
     while(prev !== tail) {
         // 同样的 暂存next
       const next = current.next; // 2
       current.next = prev; // 3
       prev = current; // 1
       current = next; // 2
     }
     // 返回新的头结点和尾结点
     return [tail, head];
  }

  // 新建一个哑结点
  const dummyHead = new ListNode();
  dummyHead.next = head;
  let prev = dummyHead;
  let current = head;
  while(current) {
    // 从prev开始  
    let tail = prev;
    // 检查剩下的是否还有K个元素
    for(let i = 0; i < k; i++) {
        tail = tail.next;
        // 不够K个 直接返回答案
        if(tail === null) {
            return dummyHead.next;
        }
    }
    // 暂存一下
    const next = tail.next;
    const [newHead, newTail] = reverseListPart(current, tail);
    
    // prev的下一个是新的头结点
    prev.next = newHead;
    // 新的尾结点的下一个是原来是尾结点的下一个
    newTail.next = next;
    // prev移动到新尾
    prev = newTail;
    // current移动到新尾的下一个
    current = newTail.next;
  }
   return dummyHead.next;

};
```
