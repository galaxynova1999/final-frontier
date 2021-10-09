---
title: 142. 环形链表 II
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/linked-list-cycle-ii/);
:::


```typescript
function detectCycle(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    while(fast) {
        slow = slow.next;
        if(fast.next) {
            fast = fast.next.next;
        } else {
            return null;
        }

        if(fast === slow) {
            // 相遇
            let p = head;
            while(p !== slow) {
                p = p.next;
                slow = slow.next;
            }
            return p;
        }
    }
    return null;
};
```
