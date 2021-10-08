---
title: 43. 字符串相乘
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/multiply-strings/);
:::


```typescript
function addStrings(num1: string, num2: string): string {
     let i = num1.length - 1;
     let j = num2.length - 1;
     let result = "";
     let extra = 0;
     while(i >= 0 || j >= 0) {
         const a = i >= 0 ? Number(num1[i]) : 0;
         const b = j >= 0 ? Number(num2[j]) : 0;
         let c = a + b + extra;
         if(c >= 10) {
             c = c % 10;
             extra = 1;
         } else {
             extra = 0;
         }
         result = c + result;
         i--;
         j--;
     }
     if(extra !== 0) {
         result = extra + result;
     }
     
     return result;
};

function multiply(num1: string, num2: string): string {
   if(num1 === '0' || num2 === '0') {
       return '0';
   }

   let len1 = num1.length - 1;
   let len2 = num2.length - 1;
   let result = "0";

   for(let i = len2; i >= 0; i--) {
       const mul = +num2[i];
       let extra = 0;
       let temp = [];
       for(let j = len2; j > i; j--) {
         // 低位补0占位  
         temp.push('0');
       }
       for(let j = len1; j >= 0; j--) {
          const _mul = +num1[j];
          const sum = mul * _mul + extra;
          temp.push(sum % 10);
          extra = Math.floor(sum / 10);
       }
       if(extra) {
           temp.push(extra);
       }
       
       result = addStrings(result, temp.reverse().join(""));
   }

   return result;
   
};
```
