---
title: 503. 下一个更大元素 II
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/next-greater-element-ii/)
:::


```typescript
function nextGreaterElements(nums: number[]): number[] {
   nums = nums.concat(nums);
   const answer = new Array(nums.length).fill(-1);
   const queue = []; // 单调队列
   nums.forEach((num, index) => {
       while(queue.length && num > nums[queue[queue.length - 1]]) {
           answer[queue.pop()] = num;
       }
       queue.push(index);
   })

   return answer.slice(0, answer.length / 2);
};
```

不拷贝数组

```typescript
function nextGreaterElements(nums: number[]): number[] {
   const len = nums.length;
   const answer = new Array(nums.length).fill(-1);
   const queue = []; // 单调队列
   for(let i = 0; i < len * 2 - 1; i++) {
       while(queue.length && nums[i % len] > nums[queue[queue.length - 1] % len]) {
           answer[queue.pop()] = nums[i % len];
       }
       queue.push(i % len);
   }

   return answer;
};
```
