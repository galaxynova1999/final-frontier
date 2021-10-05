---
title: 384. 打乱数组
---


:::tip 原题链接
[LeetCode 384](https://leetcode-cn.com/problems/shuffle-an-array/);
:::


```typescript
class Solution {
    array: number[];
    constructor(nums: number[]) {
      this.array = nums;
    }

    reset(): number[] {
      return this.array;
    }

    // 参考自Lodash.shuffle;
    shuffle(): number[] {
        const length = this.array === null ? 0 : this.array.length;
        if (!length) {
            return [];
        }
        let index = -1;
        const lastIndex = length - 1;
        const result = this.array.concat();
        while (++index < length) {
            const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
            const value = result[rand];
            result[rand] = result[index];
            result[index] = value;
        }
        return result;
    }
}
```
