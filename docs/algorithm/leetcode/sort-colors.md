---
title: 75. 颜色分类
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/sort-colors/)
:::

```typescript
function sortColors(nums: number[]): void {
  let i = 0; 
  let p2 = nums.length - 1;
  let p0 = 0;

  const swap = (i: number, j: number) => {
      [nums[j], nums[i]] = [nums[i], nums[j]];
  }

  while(i <= p2) {
      // 从左向右扫描2 直到i 不是2为止
      while(nums[i] === 2 && i <= p2) {
          swap(i, p2);
          p2--;
      }
      if(nums[i] === 0) {
          swap(i, p0);
          p0++;
      }
      i++;
  }
};
```
