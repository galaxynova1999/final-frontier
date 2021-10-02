---
title: 46. 全排列
---

:::tip 原题链接
[LeetCode 46](https://leetcode-cn.com/problems/permutations/)
:::


```typescript
function permute(nums: number[]): number[][] {
   const ans: number[][] = []; 
   const visited = new Array(nums.length).fill(false);
   const dfs = (path: number[]) => {
       if(path.length === nums.length) {
          ans.push(path.concat());
          return;
       }
       for(let i = 0; i < nums.length; i++) {
           if(!visited[i]) {
                path.push(nums[i]);
                visited[i] = true;
                dfs(path);
                path.pop();
                visited[i] = false;
           }
       }
   }
   dfs([]);
   return ans;
};
```
