---
title:  基础知识
---

```javascript
const pattern1 = /^1{3,5}$/;
const pattern2 = /^1[3,5]?$/;
const pattern3 = /^1(3,5)*?$/;
```


### 实现数字千位分隔符
正向零宽断言，断言后面有三的倍数个数字，且至少出现一次
```javascript
/**
 *
 * @param {number | string} number
 * @returns {*}
 */
function toThousandPoint(number) {
    return number.toString().replace(/(\d{1,3})(?=(\d{3})+$)/g, (str) => str + ',');
}
```
