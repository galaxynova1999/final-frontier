---
title: 169. 多数元素
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/majority-element/);
:::

```typescript
function majorityElement(nums: number[]): number {
  // 摩尔投票法
  // 还可以使用 map计数 、排序取中位数等方法；
  let cadidate: number;
  let count = 0;

  nums.forEach((num) => {
     if(count === 0) cadidate = num;

     num === cadidate ? count++ : count--;
  })
  return cadidate;
};
```
