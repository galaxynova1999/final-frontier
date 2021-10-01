---
title: this详解
---


在JS中, `this`的指向可以分为两种情况来讨论。

## 情况1. 在非箭头函数中
在非箭头函数中,`this`的查找遵循四个原则, 优先级由低至高

1. 默认绑定  
这是其他三个原则都不满足时的默认规则，默认指向`window`(非严格模式)或`undefined`(严格模式)

2. 显式绑定  
当使用[对象].[方法名]的方式去调用时，`this`指向调用他的对象。

3. 手动绑定  
使用`call`,`bind`,`apply` 三个方法手动绑定作用对象后，`this`指向绑定的对象

4. new绑定  
使用`new`关键字创造出的对象里面`this`, 指向其本身

## 情况2. 在箭头函数中
箭头函数中的this，指向其代码被声明时所在作用域上下文，且不可在运行时被手动修改
例子：
```javascript
const obj = {
    a: function() { console.log(this) },
    b: {
        c: function() {console.log(this)}
    }
}
obj.a()  // obj, 相当于obj.a.call(obj)
obj.b.c() //obj.b, 相当于obj.b.c.call(obj.b)
```

```javascript
const obj = {
    a: function() { console.log(this) },
    b: {
        c: () => {console.log(this)}
    }
}
obj.a()   //obj
obj.b.c()  //window 因为 c 在声明时，所在的上下文(作用域)就是window，obj、b都不能形成作用域
```

```javascript
a = 0;
const obj = {
    a: 1,
    b: () => {
        console.log(this.a);
    }
}
obj.b(); // 0 不受显式绑定的影响
const c = {
    a: 2,
    b: obj.b
};
c.b(); // 0 不会在运行时改变
```
