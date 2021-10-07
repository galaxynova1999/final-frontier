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

方法3 使用map记录

```javascript
const deepClone = (sourceObj, cache = new Map()) => {

    if(typeof sourceObj !== 'object') return sourceObj;

    if(cache.has(sourceObj)) return cache.get(sourceObj);

    // 深拷贝初始值：对象/数组
    let copy = Array.isArray(sourceObj) ? [] : {};

    // 防止循环引用
    cache.set(sourceObj, copy);

    for (let key in sourceObj) {
        if (sourceObj.hasOwnProperty(key)) {
            if (sourceObj[key] instanceof Date) {
                // 判断日期类型
                copy[key] = new Date(sourceObj[key].getTime());
            } else if (sourceObj[key] instanceof RegExp) {
                // 判断正则类型
                copy[key] = new RegExp(sourceObj[key]);
            } else {
                // 当元素属于对象（排除 Date、RegExp、DOM）类型时递归拷贝
                copy[key] = (typeof sourceObj[key] === 'object') ? deepClone(sourceObj[key], cache) : sourceObj[key];
            }
        }
    }


    return copy;
}
```

## 实现 new

```typescript
function newObj(_class, ...rest) {
    const obj = Object.create(_class.prototype);
    const returnObj = _class.call(obj, ...rest);
    return typeof returnObj === 'object' ? returnObj : obj;
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

## 实现sum(1)(2)(3)

```javascript
function currySum(fn) {
    const param = [];
    const _ = function (...rest) {
        if(rest.length) {
            param.push(...rest);
            return _;
        } else {
            return fn.apply(null, param);
        }
    }
    return _;
}

const _sum = (...rest) => {
    return rest.reduce((prev, item) => {
        return prev + item;
    }, 0);
}

const sum = currySum(_sum);

const result = sum(1)(2)(3, 4)();

console.log(result); // 10
```

## 实现ES6 extends

```javascript
function Father(foo) {
    this.content = [foo];
}

Father.prototype.someFunc = function (bar) {
    this.content.push(bar);
    console.log(this.content);
};

function Son(foo) {
    Father.call(this, foo);
}

function extend() {
    const sonPrototype = Object.create(Father.prototype);
    // 修正原型中的constructor指向
    sonPrototype.constructor = Son;
    Son.prototype = sonPrototype;
}

extend();

const son = new Son(2);
const father = new Father(1);
console.log(Son.prototype);
son.someFunc(3); // [2, 3];
father.someFunc(4); // [1, 4]; // 不受影响

console.log(son instanceof Son, son instanceof Father); // true true 里氏替换原则 子类是父类的实例
console.log(father instanceof Son, father instanceof Father); // false true

Son.prototype.anotherFunc = () => {}; // 不影响父类
console.log(Son.prototype.__proto__ === Father.prototype) // true
```


## 防抖
```javascript
const debounce = (fn, wait) => {
    let timer;
    
    return function (...args) {
        if(timer) clearTimeout(timer);
        
        timer = setTimeout(() => {
            fn.call(this,...args);
        }, wait);
    }
}
```

## 节流
```javascript
const throttle = (fn, wait) => {
    let prev = Date.now();
    
    return function (...args) {
        const now = Date.now();
        if(now - prev > wait) {
            fn.call(this, ...args);
            prev = now;
        }
    }
}
```


## 深比较 1

```javascript
function isEqual(sourceObj, compareObj) {
    let sourceType = getType(sourceObj);
    // 1.比较类型
    if (sourceType !== getType(compareObj)) 
       return false;
    
    //2.数组对比
    else if (sourceType === "Array") {
      if (sourceObj.length !== compareObj.length) return false;
      if (sourceObj.length === 0) return true;
      
      for (let i = 0; i < sourceObj.length; i++) {
          if (!isEqual(sourceObj[i], compareObj[i])) //递归比较每一个
             return false;
      }
      return true;
    } 
    // 3.对象比较
    else if (sourceType === "Object") {
    // Object.keys() 只包含可枚举属性 Object.getOwnPropertyNames 包含所有属性,  但不包含 Symbol
    // 两者都不包含原型链上的属性 相当于自带 Object.hasOwnProperty();
    // Reflect.ownKeys === Object.getOwnPropertyNames().concat(Object.getOwnPropertySymbols());
      let sourceKeyList = Reflect.ownKeys(sourceObj);//包括Symbol
      let compareKeyList = Reflect.ownKeys(compareObj);
      if (sourceKeyList.length !== compareKeyList.length) //数量不一致
             return false;
      for (let i = 0; i < sourceKeyList.length; i++) {
          let key = sourceKeyList[i];
          if (key !== compareKeyList[i]) //比较键名
             return false;
          if (!isEqual(sourceObj[key], compareObj[key])) //递归比较
             return false;
      }
      return true;
    } 
    //4.Set Map 比较
    else if (sourceType === "Set" || sourceType === "Map") {
      // 把 Set Map 转为 Array
      return isEqual(Array.from(sourceObj), Array.from(compareObj));
    }
    
    //5.其余情况直接===比较
    
    return sourceObj === compareObj;
      
}
```

## 深比较2 
```javascript
function isObjectValueEqual(a, b) {
    // 判断两个对象是否指向同一内存，指向同一内存返回true
    if (a === b) return true;
    // 获取两个对象键值数组
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);
    // 判断两个对象键值数组长度是否一致，不一致返回false
    if (aProps.length !== bProps.length) 
         return false;
    // 遍历对象的键值
    for (let prop in a) {
      // 判断a的键值，在b中是否存在，不存在，返回false
      if (b.hasOwnProperty(prop)) {
        // 判断a的键值是否为对象，是则递归，不是对象直接判断键值是否相等，不相等返回false
        if (typeof a[prop] === 'object') {
          if (!isObjectValueEqual(a[prop], b[prop])) return false;
        } else if (a[prop] !== b[prop]) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
}
```
