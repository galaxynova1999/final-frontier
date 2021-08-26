---
title: TopK问题
---

```typescript
function findKthLargest(nums: number[], k: number): number {
    // 核心： 建堆 down/up调整 删除
    /*
    down操作是对于当前树(子树)的根节点而言，如果子节点不满足堆的定义，那么就要和
    子节点进行比较。如果存在一个子节点比根节点小，那么就move down 根节点。
    然后更新的子节点可能破坏其子节点的定义，就继续作为根节点move down。
    建堆时候从 n / 2 开始， 是因为最后一层叶子节点，没有子节点，没有办法move down。
    所以应该从叶子节点上一层的非空子节点进行down操作。
    根据完全二叉树的定义，二叉树的最后一个非叶子（至少有一个孩子）节点就是 n / 2 (root为1时)
     */
   let len = nums.length;
    // 朴实无华的交换函数
    const swap = (origin: number, target: number) => {
        const temp = nums[origin];
        nums[origin] = nums[target];
        nums[target] = temp;
    }

    const up = (i: number) => {
        let targetIndex = i;
        const leftChildIndex = i * 2 + 1;
        const rightChildIndex = i * 2 + 2;
        if(leftChildIndex < len &&
            nums[leftChildIndex] > nums[targetIndex]) {
            targetIndex = leftChildIndex;
        }
        if(rightChildIndex < len &&
            nums[rightChildIndex] > nums[targetIndex]) {
            targetIndex = rightChildIndex;
        }
        if(targetIndex !== i) {
            swap(targetIndex, i);
            up(targetIndex);
        }
    }

    // 建堆
    // 从第一个非叶子节点开始调整 一直调整到根节点
    // 第一个叶子节点的索引是Math.floor(len / 2) - 1 可以画图验证
    for(let i = Math.floor(len / 2) - 1; i >= 0 ; i--) {
        up(i);
    }

  // 重复k - 1次 删除堆顶
  for(k = k - 1;k;k--) {
    swap(0, len - 1);
    // 不再考虑末尾元素
    len--;
    up(0);
  }

    return nums[0];
};
```
