---
title: TS常见类型体操
---

## 实现Omit

```typescript
type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key];
};

// 如果联合类型使用了 extends，它就会被打散，变成多个独立的类型进行判断，最后再组合起来。
type MyExclude<T, U> = T extends U ? never : T;

type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>;

interface Example {
  a: number;
  b: string;
  c: boolean;
}

type ExampleOmitted = MyOmit<Example, 'b'>;
```

### 方案二
使用了TS4.1新增的 `Key Remapping via as` [特性](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)

```typescript
type MyOmit<T,K extends keyof T> = {
   [Key in keyof T as Key extends K ? never : Key] : T[Key]
}
```


## 函数相关
```typescript
// 提取函数参数类型
type GetParameters<T extends Function> = T extends (...args: infer Args) => any ? Args : never;

// 提取函数返回值
type GetReturnType<T extends Function> = T extends (...args: any) => infer returnType ? returnType : never;
```
