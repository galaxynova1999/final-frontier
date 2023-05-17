---
title: 16. 最接近的三数之和
---

:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/3sum-closest/)
:::

```typescript
function threeSumClosest(nums: number[], target: number): number {
    // 首先先排序 JavaScript 的 sort() 函数默认将数组元素作为字符串进行排序。
    // 对于数字数组，你需要提供一个比较函数来实现正确的数值排序。所以，应该将 nums.sort() 改为 nums.sort((a, b) => a - b)。
    nums.sort((a, b) => a - b);
    let closest = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        // 跳过重复元素 小优化
        if(i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        const current = nums[i];
        while(left < right) {
            const leftValue = nums[left];
            const rightValue = nums[right];
            const sum = current + leftValue + rightValue;

            if(sum === target) {
                return target;
            }

            if(Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }

            if(sum < target) {
                // 移动小指针
                let l = left + 1;
                while(l < right && nums[l] === nums[left]) {
                    l++;
                }
                left = l;
            } else {
                let r = right - 1;
                while(r > left && nums[r] === nums[right]) {
                    right--;
                }
                right = r;
            }
        }
    }

    return closest;
};

```
