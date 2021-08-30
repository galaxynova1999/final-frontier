---
title: 位掩码
---

在实际开发中，我们常常遇到权限的判断的问题。  
比如说，不同的用户对系统有不同的操作权限，有的用户可能有多种权限，我们最常规的办法就是每一个权限定义一个bool值。
假设，某系统有4种权限，那么，就有了：

```typescript
interface Previlege {
    read?: boolean;
    add?: boolean;
    modify?: boolean;
    delete?: boolean
}
```
那用户A同时拥有read、add、modify的权限应该怎么表示呢？

```typescript
const userPrevilege: Previlege = {
    read: true,
    add: true,
    modify: true
}
```

如果使用位掩码来声明:
```typescript
const BitMaskPrevilege =  {
    read: 1 << 0, // 0001 1
    add: 1 << 1, // 0010 2
    modify: 1 << 2, // 0100 4
    delete: 1 << 3, // 1000 8
}
```

此时重新表示用户A的权限：
```typescript
const { read, add, modify } = BitMaskPrevilege;
const userPrevilege = read | add | modify; // 0111 7
if(userPrevilege == 7) {
    console.log('current user has read add modify previlege!');
}
```

对用户权限进行修改：
```typescript
const previlege = BitMaskPrevilege.read;

// 添加权限
const addPermission = (permission) => {
    previlege = previlege | permission;
}
// 移除权限
const removePermission = (permission) => {
    previlege = previlege & ~permission;
}
// 是否拥有某些权限
const isAllow = (permission) => {
    return (previlege & permission) === permission;
}

// 是否没有某些权限
const isNotAllow = (permission) => {
    return (previlege & permission) === 0;
}

// 是否仅拥有某些权限
const isOnlyAllow = (permission) => {
    return permission === permission;
}
```



### 参考文章
[位掩码的介绍和使用](https://www.jianshu.com/p/4e73512c03b8)
