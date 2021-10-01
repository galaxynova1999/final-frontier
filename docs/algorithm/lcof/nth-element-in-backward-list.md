---
title: 22. 链表中倒数第k个节点
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/)
:::

```typescript
function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
    // 或快慢指针的思想 fast = k + 1 slow = 0 fast走到null 时 fast和slow刚好差了k个 代表倒数第k个节点
    let len = 0;
    let current = head;
    while(current !== null) {
      current = current.next;
      len++;
    }
    
    current = head;
    // 正数第 n - k 个
    for(let i = 0; i < len - k; i++) {
      current = current.next;
    }

    return current;
};
```
