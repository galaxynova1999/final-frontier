---
title: 162. 寻找峰值
---
:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/find-peak-element/)
:::

## O(n)的解法

```typescript
function findPeakElementON(nums: number[]): number {
    // 时间复杂度 O(n/2) = O(n)
    let i = 0;
    let j = nums.length - 1;

    if(nums.length === 1) {
        return 0;
    }

    while(i <= j) {
        if(i === 0 || j === nums.length - 1) {
            if(nums[i + 1] < nums[i]) {
                return i;
            }
            if(nums[j] > nums[j - 1]) {
                return j;
            }
        }
        if(nums[i + 1] < nums[i] && nums[i] > nums[i - 1]) {
            return i;
        }
        if(nums[j] > nums[j - 1] && nums[j] > nums[j + 1]) {
            return j;
        }

        i++;
        j--;

    }
};
```

## O(logN)的解法

```typescript
function findPeakElement(nums: number[]): number {
    // 二分查找的思路
    if(nums.length <= 1) {
        return 0;
    }
    let left = 0;
    let right = nums.length - 1;

    while(right - left >= 0) {
        const center = Math.floor((left + right) / 2);
        const num = nums[center];
        if(center === 0 && num > nums[1]) {
            return 0
        }
        if(center === nums.length - 1 && num > nums[nums.length - 2]) {
            return nums.length - 1;
        }
        if(num > nums[center - 1] && num> nums[center + 1]) {
            return center;
        }
        // 峰值在右侧
        if(num < nums[center + 1]) {
            left = center + 1;
        } else {
            // 峰在左侧
            right = center - 1;
        }
    }
};
```
