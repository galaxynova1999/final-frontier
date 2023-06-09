---
title: 380. O(1) 时间插入、删除和获取随机元素
---
:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/insert-delete-getrandom-o1/)
:::

```typescript
class RandomizedSet {
    elements: number[];
    hash: Map<number, number>
    constructor() {
        this.elements = [];
        this.hash = new Map();
    }

    insert(val: number): boolean {
        if(this.hash.has(val)) {
            return false;
        }

        const index = this.elements.push(val);
        this.hash.set(val, index - 1);
        return true;
    }

    remove(val: number): boolean {
        if(!this.hash.has(val)) {
            return false;
        }
        const index = this.hash.get(val)!;
        const lastEle = this.elements[this.elements.length - 1];
        // 不能直接删 否则导致全体元素的位置都错位了
        // this.elements.splice(index, 1);
        this.elements[index] = lastEle;
        this.hash.set(lastEle, index);
        this.elements.pop();
        this.hash.delete(val);
        return true;
    }

    getRandom(): number {
        const random = Math.floor(Math.random() * this.elements.length);
        return this.elements[random];
    }
}
```
