---
title: 正则表达式匹配
---

```typescript
function isMatch(s: string, p: string): boolean {
   //  p为空串 s不空 匹配
   if(s && !p) {
       return true;
   }
   const strLen = s.length;
   const patLen = p.length;
   const dp = new Array(strLen + 1);
   for(let i = 0; i < dp.length; i++) {
       dp[i] = new Array(patLen + 1).fill(false);
   }

   // 初始化
   // 都为空串 匹配
   dp[0][0] = true;
   //s空 p不空 只可能最后一个字符为*
   for(let i = 1 ; i < patLen + 1; i++) {
       if(p[i - 1] === '*') {
           dp[0][i] = dp[0][i - 2];
       }
   }

   // 当前指向的比较的字符的位置按 i - 1, j - 1来算
   // 填到dp数组里时，要分别 + 1
   for(let i = 1; i < strLen + 1; i++) {
       for(let j = 1; j < patLen + 1; j++) {
           // 直接匹配上 转移
           if(s[i - 1] === p[j - 1] || p[j - 1] === '.') {
              dp[i][j] = dp[i - 1][j - 1];
           } else if(p[j - 1] === '*') {
               // 模式串为* 分情况讨论
               // 情况1 模式串指针往前一位可以匹配当前字符 或前一个模式为.
               if(p[j - 2] === s[i - 1] ||  p[j - 2] === '.') {
                  dp[i][j] = 
            // 情况 1.1 虽然可以算作匹配 但此时不允许匹配当前字符 那就要看模式指针再往前一位后是否可以匹配字符串当前长度
            // abcd abcd* 看abcd 能否匹配 abc
                  dp[i][j - 2] ||
            // 情况 1.2 只允许匹配当前字符一次 那就要看字符串指针向前挪动一位之后能否匹配模式指针向前挪动2位
            // abcd abcd* 此时看 abc 能否匹配abc
                  dp[i - 1][j - 2] ||
            // 情况1.3 允许匹配当前字符大于等于2次 就看字符串指针向前挪动一位后是否能直接匹配当前模式
            // aaaaa a*  此时看aaaa 能否匹配a*
                  dp[i - 1][j]
               } else {
                // 情况2 模式串前一个字符不能匹配上当前字符 那就去掉前一个字符后看看能不能匹配
                  dp[i][j] = dp[i][j - 2];  
               }
           }
       }
   }

   return dp[strLen][patLen];
};
```
