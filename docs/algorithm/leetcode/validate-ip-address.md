---
title: 468. 验证IP地址
---
:::tip 原题链接
[LeetCode](https://leetcode-cn.com/problems/validate-ip-address/)
:::

```typescript
function validIPAddress(IP: string): string {
    const IPV4 = 'IPv4';
    const IPV6 = 'IPv6';
    const NEITHER = 'Neither';

    if(!IP || (IP.indexOf('.') === -1 && IP.indexOf(":") === -1)) {
        return NEITHER;
    }
    const ipv4 = IP.split('.');
    const ipv6 = IP.split(":");

    if(ipv4.length === 4) {
        for(let char of ipv4) {
            if(!char || /[a-z]|[A-Z]/.test(char)) {
                return NEITHER;
            }
            if(char.charAt(0) === '0' && char.length !== 1) {
                return NEITHER;
            }
            if(+char < 0 || +char > 255) {
                return NEITHER;
            }
        } 
        return IPV4;
    }
    if(ipv6.length === 8) {
        const reg = /^([0-9]|[a-f]|[A-F]){1,4}$/;
        for(let char of ipv6) {
            if(!char || char.length > 4) {
                return NEITHER;
            }
            if(!reg.test(char)) {
                return NEITHER;
            }
        }
        return IPV6;
    }

    return NEITHER;

};
```
