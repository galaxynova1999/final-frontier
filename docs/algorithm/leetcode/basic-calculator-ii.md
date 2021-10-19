---
title: 227. 基本计算器 II
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/basic-calculator-ii/)
:::

```typescript
function calculate(s: string): number {
   const stack = [];
   let sign = '+';
   let num = 0;
   for(let i = 0; i < s.length; i++) {
      
       if(!isNaN(Number(s[i])) && s[i] !== ' ') {
           num = num * 10 + Number(s[i]);
       }
       if(isNaN(Number(s[i])) || i === s.length - 1) {
           switch(sign) {
               case '+' : {
                   stack.push(num);
                   break;
               }
               case '-' : {
                   stack.push(-num);
                   break;
               }
               case '*' : {
                   stack.push(stack.pop() * num);
                   break;
               }
               case '/' :{
            //浮点数不支持位运算，过程中会自动转化成整数，利用这一点，可以将浮点数与0进行位或运算即可达到取整目的。
                   stack.push(stack.pop() / num | 0);
                   break;
               }
               default: {}
           }
           sign = s[i];
           num = 0;
       }
   }
   
   return stack.reduce((prev, cur) => prev + cur, 0);
};
```
