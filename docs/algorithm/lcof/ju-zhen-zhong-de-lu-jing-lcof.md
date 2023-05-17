---
title: 12. 矩阵中的路径
---


:::tip 原题链接
[剑指Offer](https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/);
:::


```typescript
function exist(board: string[][], word: string): boolean {
    const len = word.length - 1;
    const yMax = board.length - 1;
    const xMax = board[0].length - 1;
    const visited = Array.from({ length: yMax + 1 }, () => new Array(xMax + 1).fill(false));
    const dfs = (x: number, y: number, wordIndex: number) => {
      
      if(x < 0 || y < 0 || x > xMax || y > yMax || board[y][x] !== word[wordIndex] || visited[y][x]) {
          return false;
      }
      if(wordIndex === len) {
          return true;
      }


      visited[y][x] = true;
      const isOk = dfs(x + 1, y, wordIndex + 1) || dfs(x, y + 1, wordIndex + 1) ||
                   dfs(x - 1, y, wordIndex + 1) || dfs(x, y - 1, wordIndex + 1);
      visited[y][x] = false;
      return isOk;             
    }

    for(let y = 0; y <= yMax; y++) {
       for(let x = 0; x <= xMax; x++) {
           if(dfs(x, y, 0)) {
               return true;
           }
       }
    }

    return false;
};
```
