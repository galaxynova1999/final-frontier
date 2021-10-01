---
title: 实现JS常用工具函数
---

## 实现深拷贝
方法一
```javascript
function deepCopy(oldobj, newobj){
    for(let item in oldobj){
        let value = oldobj[item]
        if(Array.isArray(value)) {
            newobj[item] = [];
            deepCopy(value, newobj[item]);
        }
        else if(value instanceof Object) {
            newobj[item] = {};
            deepCopy(value, newobj[item]);
        }
        else{
            newobj[item] = value;
        }
    }
}
```

方法二 带有循环依赖检测的深拷贝
> 参考自[Vuex源码](https://github.com/vuejs/vuex/blob/dev/src/util.js#L22)

```typescript
const deepClone = (obj: Object | null, caches:{ original:any, copy: any }[] = []): Object | null => {
    if(obj === null || typeof obj !== 'object') {
        return obj;
    }
    const hitCache = caches.find((cache) => cache.original === obj);
    if(hitCache) {
        return hitCache.copy;
    }
    const copy = Array.isArray(obj) ? [] : {};
    caches.push({
        original: obj,
        copy
    });
    
    Object.keys(obj).forEach((key) => {
        copy[key] = deepClone(obj[key], caches);
    });
    
    return copy;
}
```

## 实现 new

```typescript
function newObj(superClass, ...rest) {
    const obj = Object.create(superClass.prototype);
    const returnObj = superClass.call(obj, ...rest);
    return typeof returnObj === 'object' ? returnObj :obj;
}
```

## 实现 Object.create
```javascript
function myCreate(proto){
    function F () {} 
    F.prototype = proto;
    return new F();
}
```


