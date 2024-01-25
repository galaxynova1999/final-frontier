---
title: 2. 36进制加法
---


```typescript
export function HexadecimalAdd(strA: string, strB: string) {
  const str1 = strA.split('').reverse().join('');
  const str2 = strB.split('').reverse().join('');
  function str2Num(str: string): number {
    if (str >= '0' && str <= '9') {
      return +str;
    }
    if (str >= 'a' && str <= 'z') {
      return 10 + (str.charCodeAt(0) - 'a'.charCodeAt(0));
    }

    return 0;
  }

  function num2Str(num: number): string {
    if (num >= 0 && num <= 9) {
      return `${num}`;
    }

    if (num >= 10 && num <= 35) {
      return String.fromCharCode(num + 'a'.charCodeAt(0) - 10);
    }

    return '';
  }

  let i = 0,
    j = 0,
    carry = 0;

  let result = '';

  while (i < str1.length || j < str2.length) {
    const num1 = i < str1.length ? str2Num(str1[i++]) : 0;
    const num2 = j < str2.length ? str2Num(str2[j++]) : 0;
    const sum = carry + num1 + num2;

    const remain = sum % 36;

    result = `${num2Str(remain)}` + result;

    carry = sum >= 36 ? 1 : 0;
  }

  if (carry) {
    result = '1' + result;
  }

  return result;
}
```
