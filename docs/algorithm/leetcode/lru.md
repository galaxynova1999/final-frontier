---
title: 146. LRU缓存
---
:::tip 原题链接
[LeetCode 146](https://leetcode-cn.com/problems/lru-cache/)
:::

LRU 缓存机制可以通过哈希表辅以双向链表实现，我们用一个哈希表和一个双向链表维护所有在缓存中的键值对。

- 双向链表按照被使用的顺序存储了这些键值对，靠近头部的键值对是最近使用的，而靠近尾部的键值对是最久未使用的。

- 哈希表即为普通的哈希映射（HashMap），通过缓存数据的键映射到其在双向链表中的位置。

这样以来，我们首先使用哈希表进行定位，找出缓存项在双向链表中的位置，随后将其移动到双向链表的头部，即可在 $O(1)$ 的时间内完成 `get` 或者 `put` 操作。具体的方法如下：

- 对于 `get` 操作，首先判断 `key` 是否存在：

    - 如果 `key` 不存在，则返回 $-1$；

    - 如果 `key` 存在，则 `key` 对应的节点是最近被使用的节点。通过哈希表定位到该节点在双向链表中的位置，并将其移动到双向链表的头部，最后返回该节点的值。

- 对于 `put` 操作，首先判断 `key` 是否存在：

    - 如果 `key` 不存在，使用 `key` 和 `value` 创建一个新的节点，在双向链表的头部添加该节点，并将 `key` 和该节点添加进哈希表中。然后判断双向链表的节点数是否超出容量，如果超出容量，则删除双向链表的尾部节点，并删除哈希表中对应的项；

    - 如果 `key` 存在，则与 `get` 操作类似，先通过哈希表定位，再将对应的节点的值更新为 `value`，并将该节点移到双向链表的头部。

上述各项操作中，访问哈希表的时间复杂度为 $O(1)$，在双向链表的头部添加节点、在双向链表的尾部删除节点的复杂度也为 $O(1)$。而将一个节点移到双向链表的头部，可以分成「删除该节点」和「在双向链表的头部添加节点」两步操作，都可以在 $O(1)$ 时间内完成。

:::tip
在双向链表的实现中，使用一个**伪头部**（dummy head）和**伪尾部**（dummy tail）标记界限，
这样在添加节点和删除节点的时候就不需要检查相邻的节点是否存在。
:::

**复杂度分析**

* 时间复杂度：对于 `put` 和 `get` 都是 $O(1)$。

* 空间复杂度：$O(\text{capacity})$，因为哈希表和双向链表最多存储 $\text{capacity} + 1$ 个元素。

```typescript
class ListsNode {
    prev: ListsNode | null;
    next: ListsNode | null;
    value: number;
    key: number;
    constructor(key?: number, value?: number, prev?: ListsNode, next?: ListsNode) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}
class LRUCache {
    capacity: number;

    hash: Map<number, ListsNode>;

    current: number;

    dummyHead: ListsNode;

    dummyTail: ListsNode;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.hash = new Map<number, ListsNode>();
        this.current = 0;
        this.dummyHead = new ListsNode();
        this.dummyTail = new ListsNode();
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
    }

    get(key: number): number {
        if(this.hash.has(key)) {
            const node = this.hash.get(key);
            this.moveToHead(node);
            return node.value;
        } else {
            return -1;
        }
    }

    put(key: number, value: number): void {
        if(this.hash.has(key)) {
            const node = this.hash.get(key);
            node.value = value;
            this.moveToHead(node);
        } else {
            const node = new ListsNode(key, value);
            this.hash.set(key, node);
            this.addToHead(node);
            this.current++;
            if(this.current > this.capacity) {
                this.deleteLastItem();
            }
        }
    }

    private moveToHead(node: ListsNode) {
        this.removeFromList(node);
        this.addToHead(node);
    }

    private addToHead(node: ListsNode) {
        node.next = this.dummyHead.next;
        node.prev = this.dummyHead;
        this.dummyHead.next.prev = node;
        this.dummyHead.next = node;
    }

    private removeFromList(node: ListsNode) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    private deleteLastItem() {
        const node = this.dummyTail.prev;
        this.removeFromList(node);
        this.hash.delete(node.key);
        this.current--;
    }
}
```
