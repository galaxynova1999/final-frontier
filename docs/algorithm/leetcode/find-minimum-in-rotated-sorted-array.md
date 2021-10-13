---
title: 153. 寻找旋转排序数组中的最小值
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/)
:::


```typescript
function findMin(nums: number[]): number {
    // n次旋转后 应该得到一个左降右升的数组
    // 中间节点就是 答案
    if(!nums) return 0;

    let left = 0;
    let right = nums.length - 1;
    // 注意此处条件 二者不能相遇 否则下面的逻辑错误
    while(left < right) {
        const mid = Math.floor((left + right) >> 1);
        
        const value = nums[mid];

        if(value < nums[right]) {
            // 注意不是mid - 1; 因为此时mid可能是最小的元素
           right = mid;
        } else {
            // 此时mid必不可能是最小的元素
           left = mid + 1; 
        }
    }

    return nums[left];
};
```
