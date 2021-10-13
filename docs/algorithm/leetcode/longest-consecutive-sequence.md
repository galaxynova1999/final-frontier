---
title: 128. 最长连续序列
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/longest-consecutive-sequence/)
:::

```typescript
function longestConsecutive(nums: number[]): number {
   const hash = new Set<number>(nums);
   let answer = 0;
   hash.forEach(value => {
      if(!hash.has(value - 1)) {
          let len = 1;
          let num = value;
          while(hash.has(num + 1)) {
              len++;
              num += 1;
          }
          answer = Math.max(answer, len);
      } 
   });
   return answer;
};
```

