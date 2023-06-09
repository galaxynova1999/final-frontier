---
title: 168. Excel表列名称
---
:::tip 原题链接
[LeetCode](https://leetcode.cn/problems/excel-sheet-column-title/)
:::

```typescript
function convertToTitle(columnNumber: number): string {
    const letters: string[] = [];

    let remain = 0;
    // 看似是26进制 但是和26进制不一样 没有0  所以 remain为0的时候 其实就是借前面一位
    // 本该进位的Z仍然写在原位
    while(columnNumber > 0) {
        remain = columnNumber % 26;
        columnNumber = Math.floor(columnNumber / 26);

        if(remain === 0) {
            // 不这么处理 52就会计算错误
            columnNumber--;
            remain = 26;
        }

        letters.unshift(String.fromCharCode(remain - 1 + 'A'.charCodeAt(0)));
    }

    return letters.join('');
};
```
