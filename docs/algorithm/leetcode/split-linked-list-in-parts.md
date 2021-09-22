---
title: 725. 分割链表
---

:::tip 原题链接
[LeetCode 725](https://leetcode-cn.com/problems/split-linked-list-in-parts/)
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

function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
    // 没有必要做head的空检查
    let length = 0;
    let count = head;
    // 计算一下链表的长度
    while(count !== null) {
        length++;
        count = count.next;
    }
    // 平均分成k份 应该每份有多少个元素
    const partsCount = Math.floor(length / k);
    // 平均分成k份后 还剩下多少个元素没法分
    const remainCount = length % k;

    let current = head;
    const result = new Array(k).fill(null);
    for(let i = 0; i < k && current !== null; i++) {
        result[i] = current;
        // 剩下的remainCount个元素 只需要平均的加到前K个元素上就好了
        // 如 length = 8 k = 3; 则 k = 2 remain = 2 剩下的2个元素 就加到前2个数据里去
        const insertCount = partsCount + (i < remainCount ? 1 : 0);
        for(let j = 1; j < insertCount; j++) {
            current = current.next;
        }
        const next = current.next;
        // 断开链表
        current.next = null;
        current = next;
    }
    return result;
};
```
