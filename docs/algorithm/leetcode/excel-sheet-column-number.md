---
title: 171. Excel 表列序号
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/excel-sheet-column-number/)
:::


```typescript
function titleToNumber(columnTitle: string): number {
  // 26进制  转 10进制
  let i = 0;
  let answer = 0;
  for(let j = columnTitle.length - 1; j >= 0; j--) {
      const value = columnTitle.charCodeAt(j) - 'A'.charCodeAt(0) + 1;
      answer += value * (26 ** i);
      i++;
  }
  return answer;
};
```
