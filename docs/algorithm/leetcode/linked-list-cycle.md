---
title: 141. 环形链表
---
:::tip 原题链接
[LeetCode 141](https://leetcode-cn.com/problems/linked-list-cycle/)
:::

```typescript
function hasCycle(head: ListNode | null): boolean {
    // 快慢指针的思想 快指针每次多走一步  一定比慢指针先进入环
    // 在环内 快慢指针一定会相遇
    if(!head) {
        return false;
    }
    let fast = head.next;
    let slow = head;
    while(fast !== slow) {
        if(fast === null || fast.next === null) {
            return false;
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    return true;
};
```
