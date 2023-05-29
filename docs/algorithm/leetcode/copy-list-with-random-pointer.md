---
title: 138. 复制带随机指针的链表
---
:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/copy-list-with-random-pointer/)
:::

```typescript
function copyRandomList(head: Node | null): Node | null {
    if(!head) {
        return null;
    }

    const newHead = new Node();

    const map = new Map<Node, Node>();

    let i = head;

    let j = newHead;

    while(i !== null) {
        j.next = new Node(i.val);
        j = j.next;
        map.set(i, j);
        i = i.next;
    }

    map.forEach((value, key) => {
        value.random = map.get(key.random) || null
    })

    return newHead.next;

};
```
