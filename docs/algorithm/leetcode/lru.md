---
title: 146. LRU缓存
---
:::tip 原题链接
[LeetCode 146](https://leetcode-cn.com/problems/lru-cache/)
:::

```typescript
const Node = (key: any, value: any) => {
    this.next = null;
    this.prev = null;
    this.key = key;
    this.value = value;
}

const LRUCache = (capacity: number) => {
   this.hash = new Map();
   this.capacity = capacity;
   this.current = 0;
   this.dummyHead = new Node();
   this.dummyTail = new Node();
   this.dummyHead.next = this.dummyTail;
   this.dummyTail.prev = this.dummyHead;
};


LRUCache.prototype.get = (key: any) => {
  if(this.hash.has(key)){
      const node = this.hash.get(key);
      this.moveToHead(node);
      return node.value;
  }
  else {
      return -1;
  }
};

LRUCache.prototype.moveToHead = (node: Node) => {
    this.removeFromList(node);
    this.addToHead(node);
}

LRUCache.prototype.removeFromList = (node: Node) =>  {
    const tempPrev = node.prev;
    const tempNext = node.next;
    tempPrev.next = tempNext;
    tempNext.prev = tempPrev;
}

LRUCache.prototype.addToHead = (node: Node) => {
    node.prev = this.dummyHead;
    node.next = this.dummyHead.next;
    this.dummyHead.next.prev = node;
    this.dummyHead.next = node;
}

LRUCache.prototype.put = (key: any, value: any) => {
   if(this.hash.has(key)) {
     const node = this.hash.get(key);
     node.value = value;
     this.moveToHead(node);
   }
   else {
     const node = new Node(key,value);
     this.hash.set(key,node);
     this.addToHead(node);
     this.current++;
     if(this.current > this.capacity){
         this.deleteItemByLRU();
     }
   }
};

LRUCache.prototype.deleteItemByLRU = () => {
     const tailItem = this.dummyTail.prev; // 通过虚拟尾节点找到它
     this.removeFromList(tailItem);
     this.hash.delete(tailItem.key);
     this.current--;
}
```
