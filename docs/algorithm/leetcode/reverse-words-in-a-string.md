---
title: 151. 翻转字符串里的单词
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/reverse-words-in-a-string/)
:::


```typescript
function reverseWords(s: string): string {
    // 双端队列
   s = s.trim(); // 先去除两端空白

   const queue = [];
   let word = '';
   let i = 0;
   let j = s.length - 1;
   while(i <= j) {
       const char = s[i];
       if(char === ' ' && word.length) {
           queue.unshift(word);
           word = '';
       } else if(char !== ' ') {
           word += char;
       }
       i++;
   }
   queue.unshift(word);

   return queue.join(" ");
   
};
```
