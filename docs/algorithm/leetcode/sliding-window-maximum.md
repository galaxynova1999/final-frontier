---
title: 239. 滑动窗口最大值
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/sliding-window-maximum/)
:::


```typescript
function maxSlidingWindow(nums: number[], k: number): number[] {
    const deque = []; //存放单调队列的下标
    // 队头永远是最大值
    const result = []; 
    for(let i = 0; i < nums.length; i++) {
        while(nums[deque[deque.length-1]] <= nums[i]) {
            deque.pop();  //如果新加进来的数比单调队列中原来的数都要大，则直接弹出队列中的其他数
        }

        deque.push(i);
        if(i - deque[0] >= k) {
            deque.shift(); //在滑动窗口之外的直接从队头删掉
        }
        
     
        //数组下标从0开始，k=3时 ，下标为0，1，2的数组元素构成一个滑动窗口，所以条件为i >= k-1就可以将答案存入res中
        if(i >= k-1) {  
            result.push(nums[deque[0]]);
        }
   }
   return result;
};
```
