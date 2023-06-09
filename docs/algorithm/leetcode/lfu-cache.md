---
title: 460. LFU缓存
---
:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/lfu-cache/)
:::


```typescript
class ListsNode {
    prev: ListsNode | null;
    next: ListsNode | null;
    value: number;
    key: number;
    freq: number;
    constructor(key: number, value: number, freq: number, prev?: ListsNode, next?: ListsNode) {
        this.key = key;
        this.value = value;
        this.prev = prev || null;
        this.next = next || null;
        this.freq = freq;
    }
}


class twoWayLinkedList {
    length = 0;
    head = new ListsNode(-1, -1, -1);
    tail = new ListsNode(-1, -1, -1);

    constructor() {
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addToHead(node: ListsNode) {
        const next = this.head.next!;
        this.head.next = node;
        node.next = next;
        next.prev = node;
        node.prev = this.head;
        this.length++;
    }

    remove(node: ListsNode) {
        const prev = node.prev!;
        const next = node.next!;
        prev.next = next;
        next.prev = prev;
        this.length--;
    }

    getHead() {
        return this.head.next;
    }

    getTail() {
        return this.tail.prev;
    }
}

class LFUCache {
    capacity: number;

    // 保存每个频率的所有节点
    freq2List = new Map<number, twoWayLinkedList>();

    // 保存每个key对应的节点在双向链表中的位置
    key2freq = new Map<number, ListsNode>();

    minFreq = 0;

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    get(key: number, updateValue?: number): number {
        const node = this.key2freq.get(key);

        if(node === undefined) {
            return -1;
        }

        const currentList = this.freq2List.get(node.freq)!;

        currentList.remove(node);

        if(currentList.length === 0) {
            this.freq2List.delete(node.freq);
            if(this.minFreq === node.freq) {
                this.minFreq++;
            }
        }

        const nextFreq = node.freq + 1;

        let nextList = this.freq2List.get(nextFreq); // 获取下一级节点头

        if(!nextList) {
            const newList =  new twoWayLinkedList();
            this.freq2List.set(nextFreq, newList);
            nextList = newList;
        }

        node.freq++;

        if(updateValue !== undefined) {
            node.value = updateValue;
        }

        nextList.addToHead(node);

        return node.value;
    }

    put(key: number, value: number): void {
        const node = this.key2freq.get(key);

        if(node === undefined) {
            const reachMaxCapacity = this.key2freq.size === this.capacity;
            if(reachMaxCapacity) {
                // 删除mimFreq的最后一个节点
                const list = this.freq2List.get(this.minFreq)!;
                const last = list.getTail()!;
                list.remove(last);
                this.key2freq.delete(last.key);
                if(list.length === 0) {
                    this.freq2List.delete(this.minFreq);
                }
            }
            let freq1List = this.freq2List.get(1);
            if(!freq1List) {
                const newList = new twoWayLinkedList();
                this.freq2List.set(1, newList);
                freq1List = newList;
            }
            const newNode = new ListsNode(key, value, 1);
            freq1List.addToHead(newNode)
            this.key2freq.set(key, newNode);
            this.minFreq = 1;
        } else {
            this.get(key, value); // 用这个方法来模拟一下
        }
    }
}
```
