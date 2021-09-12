---
title: 209. 长度最小的子数组
---


```typescript
function minSubArrayLen(target: number, nums: number[]): number {
   // 核心思想：滑动窗口 
   if(!nums || !nums.length) {
       return 0;
   }

   // 双指针
   let start = 0;
   let end = 0;
   let answer = Number.MAX_SAFE_INTEGER;
   let sum = 0;
   while(end < nums.length) {
      sum += nums[end];
      // 找到了一组答案 尝试减少数量 看是否能更小
      while(sum >= target) {
          answer = Math.min(answer, end - start + 1);
          sum -= nums[start];
          start++;
      }
      end++;
   }

   return answer === Number.MAX_SAFE_INTEGER ? 0 : answer;

};
```
