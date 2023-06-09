---
title: 316. 去除重复字母
---
:::tip 原题链接
[LeetCode 394](https://leetcode.cn/problems/remove-duplicate-letters/)
:::


```typescript
function removeDuplicateLetters(s: string): string {
     //遇到一个新字符 如果比栈顶小 并且在新字符后面还有和栈顶一样的 就把栈顶的字符抛弃了

    const stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if(stack.indexOf(char) !== -1) {
            continue; // 去重
        }
        while(
            stack.length &&
            stack[stack.length - 1] > char &&
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
                // 看看后面还有没有
            s.indexOf(stack[stack.length - 1], i) !== -1
        ) {
            stack.pop();
        }

        stack.push(char);
    }

    return stack.join('');
};
```
