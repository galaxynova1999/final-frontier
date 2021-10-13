---
title: 14. 最长公共前缀
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/longest-common-prefix/)
:::


```typescript
function longestCommonPrefix(strs: string[]): string {
  // 纵向扫描 
  if(!strs) {
      return "";
  }
  for(let i = 0; i < strs[0].length; i++) {
      const char = strs[0].charAt(i);
      for(let j = 1; j < strs.length; j++) {
          if(strs[j].charAt(i) !== char || i === strs[j].length) {
              return strs[0].slice(0, i);
          }
      }
  }
  return strs[0];
};
```
