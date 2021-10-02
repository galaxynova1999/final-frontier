---
title: 34. 在排序数组中查找元素的第一个和最后一个位置
---

:::tip 原题链接
[LeetCode 34](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
:::


```typescript
function searchRange(nums: number[], target: number): number[] {
  // 本质上在寻找第一次出现某个target的地方
  const binarySearch = (lower: boolean): number => {
    let left = 0;
    let right = nums.length - 1;
    let ans = nums.length;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
       
        // 第一个条件是查找第一次出现大于的地方
        // 第二个条件是查找第一次出现的地方
        if(nums[mid] > target || (lower && nums[mid] === target)) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
  }

  // 向左向右查找第一次出现的位置 和 第一次大于出现的位置

  const left = binarySearch(true);
  const right = binarySearch(false) - 1;
  
  if(left <= right && right < nums.length && nums[left] === target && nums[right] === target) {
      return [left, right];
  } else {
      return [-1, -1];
  }
};
```
