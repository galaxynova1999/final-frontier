---
title: 912. 排序数组
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/sort-an-array/)
:::

```typescript
function sortArray(nums: number[]): number[] {
  // 归并排序
  const answer = [];
  const mergeSort = (l: number, r: number) => {
      if(l >= r) {
          return;
      }
      const mid = Math.floor((l + r) >> 1);
      mergeSort(l, mid);
      mergeSort(mid + 1, r);
      let i = l;
      let j = mid + 1;
      let p = 0;
      
      while(i <= mid && j <= r) {
          if(nums[i] < nums[j]) {
              answer[p] = nums[i];
              i++;
          } else {
              answer[p] = nums[j];
              j++;
          }
          p++;
      }
      while(i <= mid) {
          answer[p] = nums[i];
          p++;
          i++;
      }

      while(j <= r) {
          answer[p] = nums[j];
          p++;
          j++;
      }

      // 复制
      for(let k = 0; k < (r - l + 1); k++) {
          // 注意是 k + L
          nums[k + l] = answer[k];
      }
  }
  mergeSort(0, nums.length - 1);
  return nums;
};
```
