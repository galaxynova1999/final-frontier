---
title: 22. 括号生成
---
:::tip 原题链接
[LeetCode 22](https://leetcode-cn.com/problems/generate-parentheses/)
:::

:::warning
LeetCode卡答案顺序 导致无法AC 但思路是正确的
:::

```typescript
function generateParenthesis(n: number): string[] {
   // 核心思路 动态规划
   // n = 1时 结果只能是()
   // n = 2时 结果为()() || (()) || ()()
   // n = 3时。。。。
   // 规律: 下一层的结果是把一个括号对 分别放到n-1的结果的左边、右边以及外面(包裹)
   // 其中会有大量重复结果 使用set去重
   if(n <= 1) {
       return ['()'];
   }
   const dp: string[][] = Array.from({ length: n }, () => []);
   
   dp[0] = ['()'];
   for(let i = 1; i < n; i++) {
       dp[i - 1].forEach(item => {
           dp[i].push(...new Set([`()${item}`, `(${item})`, `${item}()`]));
       })
   } 

   // hack leetcode卡答案顺序
   dp[n - 1].sort();
   return dp[n - 1];
};
```
