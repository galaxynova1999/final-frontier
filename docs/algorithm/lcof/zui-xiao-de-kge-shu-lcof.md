---
title: 40. 最小的k个数
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/)
:::

```typescript
function getLeastNumbers(arr: number[], k: number): number[] {
   //基于快排切分
   const sort = (l: number, r: number): number => {
       let i = l;
       let j = r;
       if(i < j) {
           const pivot = arr[l];
           while(i < j) {
                while(j > i && arr[j] >= pivot) {
                    j--;
                }
                if(j > i) {
                    arr[i] = arr[j];
                    i++;
                }
                while(i < j && arr[i] < pivot) {
                    i++;
                }
                if(i < j) {
                    arr[j] = arr[i];
                    j--;
                }
           }
           arr[i] = pivot;
       }
       return i;
   }

   const quickSearch = (left: number, right: number) => {
       const _k = sort(left, right);
       if(_k === k) {
          return arr.slice(0, _k);
       }
       return _k > k ? quickSearch(left, _k - 1) : quickSearch(_k + 1, right);
   }

   return quickSearch(0, arr.length - 1);
};
```
