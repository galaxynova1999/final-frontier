---
title: 215. 数组中的第K个最大元素
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)
:::

```typescript
function findKthLargest(nums: number[], k: number): number {
   if(!nums || nums.length === 1) {
       return nums[0];
   } 
   //基于快排切分
   const sort = (l: number, r: number): number => {
       let i = l;
       let j = r;
       if(i < j) {
           const pivot = nums[l];
           while(i < j) {
                while(j > i && nums[j] >= pivot) {
                    j--;
                }
                if(j > i) {
                    nums[i] = nums[j];
                    i++;
                }
                while(i < j && nums[i] < pivot) {
                    i++;
                }
                if(i < j) {
                    nums[j] = nums[i];
                    j--;
                }
           }
           nums[i] = pivot;
       }
       return i;
   }

   const quickSearch = (left: number, right: number) => {
       const _k = sort(left, right);
       if(_k === nums.length - k) {
           return nums[_k];
       }
       return( _k > nums.length - k ) ? quickSearch(left, _k - 1) : quickSearch(_k + 1, right);
   }

   return quickSearch(0, nums.length - 1);
};
```
