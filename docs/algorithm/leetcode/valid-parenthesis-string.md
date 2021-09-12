---
title: 678. 有效的括号字符串
---

```typescript
/**
 在有星号的情况下，需要两个栈分别存储左括号和星号。从左到右遍历字符串，进行如下操作。

 如果遇到左括号，则将当前下标存入左括号栈。

 如果遇到星号，则将当前下标存入星号栈。

 如果遇到右括号，则需要有一个左括号或星号和右括号匹配，由于星号也可以看成右括号或者空字符串，因此当前的右括号应优先和左括号匹配，没有左括号时和星号匹配：

 如果左括号栈不为空，则从左括号栈弹出栈顶元素；
 如果左括号栈为空且星号栈不为空，则从星号栈弹出栈顶元素；
 如果左括号栈和星号栈都为空，则没有字符可以和当前的右括号匹配，返回 false。
 遍历结束之后，左括号栈和星号栈可能还有元素。为了将每个左括号匹配，需要将星号看成右括号，且每个左括号必须出现在其匹配的星号之前。
 当两个栈都不为空时，每次从左括号栈和星号栈分别弹出栈顶元素，对应左括号下标和星号下标，判断是否可以匹配，匹配的条件是左括号下标小于星号下标，如果左括号下标大于星号下标则返回 false。

 最终判断左括号栈是否为空。如果左括号栈为空，则左括号全部匹配完毕，剩下的星号都可以看成空字符串，此时 s 是有效的括号字符串，返回 true。
 如果左括号栈不为空，则还有左括号无法匹配，此时 s 不是有效的括号字符串，返回 false。
 */

function checkValidString(s: string): boolean {
   const leftStack = [];
   const starStack = [];
   const array = s.split("");
   // 请勿使用forEach 无法提前终止 return也不行！！
   for(let i = 0; i < array.length; i++) {
       const char = array[i];
       if(char === '(' ) {
           leftStack.push(i);
       } else if(char === '*') {
           starStack.push(i);
       } else {
           if(leftStack.length) {
               leftStack.pop();
           } else if(starStack.length) {
               starStack.pop();
           } else {
               // 在foreach中这一步无法达到想要的效果
               return false;
           }
       }
   }


   while(leftStack.length && starStack.length) {
       const left = leftStack.pop();
       const star = starStack.pop();
       if(left > star) {
           return false;
       }
   }
   return leftStack.length === 0;
};
```
