---
title: 5. 最长回文子串
---

:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/longest-palindromic-substring/)
:::

```javascript
/**
 * @param {string} s
 * @return {string}
 */

// 如果是回文子串，那么它的左右两边的元素肯定是对称的，我们可以使用左右指针，从当前元素向两边扩散，以找到最长字串。
// 中心扩散法
var longestPalindrome = function(s) {
    let result = "";
    const isPalindrome = (start, end) => {
        while(s[start] === s[end] && start >=0 && end < s.length) {
            start--
            end++;
        }
        if(end - start - 1 > result.length) {
            result = s.slice(start + 1, end);
        }
    }

    for(let i = 0; i < s.length; i++) {
        // 寻找长度为奇数的回文子串(以当前元素向两边扩散)
        isPalindrome(i,i);
        // 寻找长度为偶数的回文子串(以s[i],s[i + 1])向两边扩散
        isPalindrome(i, i + 1);
    }
    return result;
};
```
