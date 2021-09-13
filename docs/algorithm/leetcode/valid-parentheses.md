---
title: 20. 有效的括号
---

:::tip 原题链接
[LeetCode 20](https://leetcode-cn.com/problems/valid-parentheses/)
:::

```javascript

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   if(s.length % 2 !== 0 ){
       return false;
   }
   let stack = [];
   let map = new Map([
       [
         ")","("
       ],
       [
           "]","["
       ],
       [
           "}","{"
       ]
   ])
   s.split("").forEach((item) => {
        if(map.has(item)){
            if(!stack.length || map.get(item) !== stack[stack.length - 1]){
                return false;
            }
            stack.pop();
        }
        else{
            stack.push(item);
        }
   })
   return !stack.length;
};
```
