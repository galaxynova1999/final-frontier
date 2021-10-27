---
title: 55. 跳跃游戏
---
:::tip 原题链接
[LeetCode 15](https://leetcode-cn.com/problems/jump-game/)
:::

```typescript
function canJump(nums: number[]): boolean {
   let maxReach = nums[0];
   if(nums.length === 1) return true;

   for(let i = 1; i < nums.length; i++) {
       if(i <= maxReach) {
           // 最大可达等于当前下标i + 当前下标步数
           maxReach = Math.max(maxReach, i + nums[i]);
           // 只有出现下面这种情况 才是true
           if (maxReach >= nums.length - 1) {
               return true;
           }
       }
   }
   return false;
};
```
