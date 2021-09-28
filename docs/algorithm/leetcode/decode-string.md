---
title: 394. 字符串解码
---
:::tip 原题链接
[LeetCode 394](https://leetcode-cn.com/problems/decode-string/)
:::

```typescript
function decodeString(s: string): string {
    const alphaStack = [];
    const numStack = [];
    let result = "";
    let num = 0; // 记录当前的数字
    for(let i = 0; i < s.length; i++) {
        // 遇到字母就增加
        if(!isNaN(+s[i])) {
           num = num * 10 + (+s[i]);
            // 遇到左括号就暂存目前的值
        } else if(s[i] === '[') {
            numStack.push(num);
            num = 0;
            alphaStack.push(result);
            result = '';
        } else if(s[i] === ']') {
            // 遇到右括号  开始出栈
            const times = numStack.pop() || 0;
            let alpha = alphaStack.pop();
            for(let i = 0; i < times; i++) {
                alpha += result;
            }
            result = alpha;
        } else {
            result += s[i];
        }
    }
    return result;
};
```
