---
title: 58. 最后一个单词的长度
---
:::tip 原题链接
[LeetCode 15](https://leetcode-cn.com/problems/length-of-last-word/)
:::

```typescript
function lengthOfLastWord(s: string): number {
   const queue: string[] = [];
   let word = "";
   for(let i = 0; i < s.length; i++) {
       if(s[i] === ' ') {
           if(word !== "") {
               queue.push(word);
               word = "";
           }
       } else {
           word += s[i];
       }
   }
   if(word !== "") queue.push(word);

   return queue[queue.length - 1].length;
};
```
