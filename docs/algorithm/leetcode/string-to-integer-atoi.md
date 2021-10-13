---
title: 8. 字符串转换整数 (atoi)
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/string-to-integer-atoi/)
:::

```typescript
function myAtoi(s: string): number {
   s = s.trim();
   const max = (2 ** 31) - 1;
   const min = -(2 ** 31);

   let answer = 0;
   let left = 0;
   let sign = '+';
   let number = '';
   if(s[left] === '+' || s[left] === '-') {
       sign = s[left];
       left++;
   }
   if(isNaN(+s[left])) {
     return 0;
   }
   while(left < s.length && s[left] !== ' ' && !isNaN(+s[left])) {
     number += s[left];
     left++;
   }
   
   for(let i = number.length - 1, j = 0; i >= 0; i--, j++) {
       answer += ((+number[i]) * (10 ** j));
   }
   if(sign === '+' && answer > max) {
       return max;
   }
   if(sign === '-') {
       answer = -answer;
       if(answer < min) {
           return min;
       }
   }
   return answer;

};
```
