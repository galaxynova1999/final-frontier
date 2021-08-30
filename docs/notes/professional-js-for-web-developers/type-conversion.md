---
title: 隐式类型转换
---

```typescript
const obj = {};
const a = 3 + obj;
const b = 3 - obj;

console.log(a); // 3[object Object]
console.log(b); // NaN
```
