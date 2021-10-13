---
title: 234. 回文链表
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/palindrome-linked-list/)
:::

```typescript
function isPalindrome(head: ListNode | null): boolean {
    if(!head || head.next === null) {
        return true;
    }

    let slow = head;
    let fast = head;
    // 找中点
    while(fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    // 翻转后半部分
    const reverse = (node: ListNode) => {
        let prev = null;
        let current = node;
        while(current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }

    const _secondPart = reverse(slow.next);
    let answer = true;
    let firstPart = head;
    let secondPart = _secondPart;
    while(answer && secondPart) {
        if(firstPart.val !== secondPart.val) answer = false;
        firstPart = firstPart.next;
        secondPart = secondPart.next;
    }
    // 修复
    firstPart.next = reverse(_secondPart);
    return answer;
};
```
