---
title: 22. 括号生成
---
:::tip 原题链接
[LeetCode 22](https://leetcode-cn.com/problems/generate-parentheses/)
:::

```typescript
function generateParenthesis(n: number): string[] {
    /**
     *  !!! 注意 以下动态规划的思想完全是错误的
     *  不可能简单枚举下一个括号的位置
     */
   // 核心思路 动态规划
   // n = 1时 结果只能是()
   // n = 2时 结果为()() || (()) || ()()
   // n = 3时。。。。
   // 规律: 下一层的结果是把一个括号对 分别放到n-1的结果的左边、右边以及外面(包裹)
   // 其中会有大量重复结果 使用set去重
   // if(n <= 1) {
   //     return ['()'];
   // }
   // const dp: string[][] = Array.from({ length: n }, () => []);
   //
   // dp[0] = ['()'];
   // for(let i = 1; i < n; i++) {
   //     dp[i - 1].forEach(item => {
   //         dp[i].push(...new Set([`()${item}`, `(${item})`, `${item}()`]));
   //     })
   // } 
   //
   // // hack leetcode卡答案顺序
   // dp[n - 1].sort();
   // return dp[n - 1];
};

function generateParenthesis(n: number): string[] {
    // 回溯
    const answer: string[] = [];
    function backTrack(str: string, leftParCount: number, rightParCount: number) {
        if (str.length === 2 * n) {
            answer.push(str);
            return;
        }

        // 可以加一个左括号
        if (leftParCount < n) {
            backTrack(str + "(", leftParCount + 1, rightParCount);
        }

        // 每有一个左括号就可以放置右括号
        if (rightParCount < leftParCount) {
            backTrack(str + ")", leftParCount, rightParCount + 1);
        }
    }

    backTrack("", 0, 0);
    return answer;
}
```
