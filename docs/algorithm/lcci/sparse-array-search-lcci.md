---
title: 面试题 10.05. 稀疏数组搜索
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/sparse-array-search-lcci/)
:::

```typescript
function findString(words: string[], s: string): number {
   let left = 0;
   let right = words.length - 1;

   while(left <= right) {
       let mid = Math.floor((left + right) >> 1);
       // mid 不能退到left
       while(words[mid] === "" && mid > left) {
           mid--;
       }
       if(words[mid] === s) return mid;
       if(words[mid] > s) {
           right = mid - 1;
       }else {
           left = mid + 1;
       }
   }

   return -1;
};
```
