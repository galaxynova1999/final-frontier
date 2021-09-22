---
title: 88. 合并两个有序数组
---
:::tip 原题链接
[LeetCode 88](https://leetcode-cn.com/problems/merge-sorted-array/)
:::

### 思路

- 核心：从后向前数组遍历
- 因为 `nums1` 的空间都集中在后面，所以从后向前处理排序的数据会更好，节省空间，一边遍历一边将值填充进去
- 设置指针 `len1` 和 `len2` 分别指向 `nums1` 和 `nums2` 的有值的尾部，从尾部值开始比较遍历，同时设置指针 `len` 指向 `nums1` 的数组末尾，每次遍历比较值大小之后，进行填充
- 当 `len1 < 0` 时遍历结束，此时 `nums2` 中如果还有数据未移动，将其直接拷贝到 `nums1` 的最前面，最后得到结果数组
- 时间复杂度：$O(m+n)$



### 代码

```typescript
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
   let cursorA = m - 1;
   let cursorB = n - 1;
   let cursorC = n + m - 1;

   while(cursorA >= 0 && cursorB >= 0) {
      nums1[cursorC--] = nums1[cursorA] > nums2[cursorB] ? nums1[cursorA--] : nums2[cursorB--];
   }
   if(cursorB >= 0) {
       // 从nums1删除前cursorB + 1 个元素 再插入nums2的前cursorB + 1 个元素
       nums1.splice(0, cursorB + 1, ...nums2.slice(0, cursorB + 1));
   }
};
```
