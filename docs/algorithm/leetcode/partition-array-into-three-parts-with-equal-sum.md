---
title: 1013. 将数组分成和相等的三个部分
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/)
:::

```typescript
function canThreePartsEqualSum(arr: number[]): boolean {
    if(arr.length <= 3) {
        return arr.every(item => item === arr[0]);
    }
    let sum = arr.reduce((prev, cur) => prev + cur, 0);

    if(sum % 3 !== 0) return false;

    const target = Math.floor(sum / 3);

    let plus = 0;
    let i = 0;

    for(; i < arr.length; i++) {
        plus += arr[i];
        if(plus === target) {
          break;  
        }
    }
    if(plus !== target) return false;
    // 找到了第一个分界点

    let j = i + 1;

    // 最后一个数组不能为空
    for(; j < arr.length - 1; j++) {
        plus += arr[j];
        if (plus === target * 2) {
            return true;
        }
    }

    return false;
};
```
