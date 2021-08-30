---
title: 无重复子符的最大长度
---

::: tip
[LeetCode 3](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)
:::

```typescript
function lengthOfLongestSubstring(s: string): number {
   if(!s) {
       return 0;
   }
   /*
   假设我们选择字符串中的第 k 个字符作为起始位置，并且得到了不包含重复字符的最长子串的结束位置为rk。  
   那么当我们选择第 k+1个字符作为起始位置时，首先从 k+1 到 rk 的字符显然是不重复的，  
   并且由于少了原本的第 k个字符，我们可以尝试继续增大 rk，直到右侧出现了重复字符为止。
    */
   const hashSet = new Set<string>(); // 记录出现过的数字
   let rk = 0;
   let max = 0;
   for(let i = 0; i < s.length; i++) {
       // 每一轮开始时 移除前一个字符 第一次除外
       if(i !== 0) {
         hashSet.delete(s[i - 1]);
       };
       // 计算最大长度
       while(rk <= s.length - 1 && !hashSet.has(s[rk])) {
          hashSet.add(s[rk]);
          rk++;
       }
       // 取最大值
       max = Math.max(max, rk - i); // rk是不满足循环的那个下标 距离为rk - i;
   }

   return max;
};
```
