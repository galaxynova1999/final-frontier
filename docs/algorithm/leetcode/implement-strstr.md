---
title: 28. 实现 strStr()
---
:::tip 原题链接
[LeetCode 15](https://leetcode-cn.com/problems/implement-strstr/)
:::

```typescript
function strStr(haystack: string, needle: string): number {
   if(!needle) return 0;

   const pivot = needle[0];
   for(let i = 0; i < haystack.length; i++) {
       if(haystack[i] === pivot) {
           let j = i;
           while(j < haystack.length) {
               if(haystack[j] === needle[j - i]) {
                   j++;
               } else {
                   break;
               }
           }
           if(j - i === needle.length) {
               return i;
           }
       }
   }
   return -1;
};
```
