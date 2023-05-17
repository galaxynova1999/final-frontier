---
title: 常用排序算法
---

# 常用排序算法

## 快速排序

实现一： 无优化版本

```typescript
function SimpleQuickSort(nums: number[]): number[] {
  if(nums.length <= 1) {
    return nums;
  }
  const base = nums[0];
  const left: number[] = [];
  const right: number[] = [];
  const draw = [base];

  for(let i = 1; i < nums.length; i++) {
    if(nums[i] < base) {
      left.push(nums[i]);
    } else if(nums[i] > base) {
      right.push(nums[i]);
    } else {
      draw.push(nums[i]);
    }
  }

  return SimpleQuickSort(left).concat(draw).concat(SimpleQuickSort(right));
}
```

::: warning
这是一段正确的快速排序算法的实现。这个算法基于分治策略，它首先选择一个“基准值”（在这个例子中，是数组的第一个元素），然后将数组分为两部分，一部分包含所有小于基准值的元素，另一部分包含所有大于基准值的元素。然后对这两个子数组递归地应用相同的过程。

**时间复杂度**：
最好情况下，每次我们都能均等地划分数组，这将使得算法具有最优的性能，时间复杂度为 O(n log n)。
最坏情况下，每次划分只能将数组减少一个元素，这样就相当于冒泡排序，时间复杂度为 O(n^2)。这种情况在输入数组已经排序的情况下发生。

**空间复杂度**：
由于这个实现在递归过程中使用了额外的数组，因此空间复杂度为 O(n)。

值得注意的是，这个实现虽然简洁明了，但是在效率和空间使用方面并不是最优的。在实际应用中，常常使用原地（in-place）版本的快速排序，它的空间复杂度可以优化到 O(log n)，这主要是因为它需要堆栈空间来处理递归。
:::

实现二： 原地交换 降低空间复杂度
```typescript
function QuickSort(nums: number[], low = 0, high = nums.length - 1){
  let left = low;
  let right = high;

  if(left < right) {
    const base = nums[left];
    while(left < right) {
      while (left < right && nums[right] >= base) {
        right--;
      }

      if(left < right) {
        nums[left] = nums[right];
        left++;
      }

      while(left < right && nums[left] <= base) {
        left++;
      }

      if(left < right) {
        nums[right] = nums[left];
        right--;
      }
    }
    // 最后left和right会指向同一个位置，所以此处left、right皆可
    nums[left] = base;
    QuickSort(nums, low, left - 1);
    QuickSort(nums, left + 1, high);
  }
}

```

## 冒泡排序

```javascript
/**
 * @param {Array<number>} array
 */
const bubbleSort = (array) => {
    const len = array.length - 1;
    let hasSwap = false;
    // 每一趟 将一个最大的数放到了 i 位置上
    // 然后向左移动一位
    for(let i = len; i >= 1; i--) {
        hasSwap = false;
        for(let j = 1; j <= i; j++) {
            if(array[j - 1] > array[j]) {
                [array[j - 1], array[j]] = [array[j], array[j - 1]];
                hasSwap = true;
            }
        }
        if(!hasSwap) {
            return;
        }
    }
}
```
```typescript
function bubbleSort(nums: number[]): number[] {
    let hasSwaped = false;
    const length = nums.length;
    // 控制比较最多n-1轮
    for(let i = 0; i < length - 1; i++) {
        hasSwaped = false;
        for(let j = 0; j < (length - 1) - i; j++) {
            if(nums[j] > nums[j + 1]) {
                const temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
                hasSwaped = true;
            }
        }
        if(!hasSwaped) {
            break;
        }
    }

    return nums;
}
```


## 堆排序
[CSDN](https://blog.csdn.net/qq_41219157/article/details/123306783)
```typescript
function HeapSort(nums: number[]) {
  /**
   * 在理解这个问题之前，我们需要理解一下二叉堆的一些性质：
   *
   * 1. 二叉堆通常是通过一个数组来表示的。
   * 2. 在数组中，给定一个节点的索引 i，其左子节点的索引为 2*i+1，右子节点的索引为 2*i+2，父节点的索引为 floor((i-1)/2)。
   *
   * 根据这些性质，我们可以知道，在一个长度为 n 的数组中，最后一个父节点的索引是 floor(n/2) - 1。
   * 这是因为，数组中位于 n/2 到 n 的元素都是二叉堆中的叶子节点，它们没有子节点。
   * 因此，我们在构建堆的时候，从最后一个非叶子节点（也就是最后一个有子节点的节点）开始，向前遍历到根节点，对每一个节点进行下沉操作，保证其满足堆的性质。
   *
   * 这样做的目的是为了保证每一个父节点的值都大于其子节点的值（在大顶堆中），因为在构建堆的过程中，我们总是先保证子节点满足堆的性质，然后再使父节点满足堆的性质。
   * 这就是为什么我们要从 floor(n/2) - 1 的位置开始构建堆的原因。
   */
  const buildHeap = () => {
    for(let i = Math.floor(nums.length / 2 - 1); i >= 0; i--) {
      heapify(i, nums.length);
    }
  }

  const swap = (i: number, j: number) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  const heapify = (target: number, heapSize: number) => {
    const leftChild = target * 2 + 1;
    const rightChild = target * 2 + 2;
    let max = target;

    // 应该在每个子节点都在数组长度内的条件下进行堆调整
    if(leftChild < heapSize && nums[leftChild] > nums[max]) {
      max = leftChild;
    }

    if(rightChild < heapSize && nums[rightChild] > nums[max]) {
      max = rightChild;
    }

    if(max !== target) {
      swap(max, target);
      // 原来的子节点
      heapify(max, heapSize);
    }
  }

  const sort = () => {
    for(let i = nums.length - 1; i > 0; i--) {
      swap(i, 0);
      // 在每次将堆顶元素与末尾元素交换后，你应该减少堆的大小，也就是在heapify的时候，只对数组的前i个元素进行调整，因为后面的元素已经是排序好的了。
      // 注意是i 不需要+1 长度已经-1了
      heapify(0, i);
    }
  }

  buildHeap();
  sort();
}
```

## 归并排序
```typescript
/**
 * 分解 -- 将当前区间一分为二，即求分裂点 mid = (low + high)/2;
   求解 -- 递归地对两个子区间a[low...mid] 和 a[mid+1...high]进行归并排序。递归的终结条件是子区间长度为1。
   合并 -- 将已排序的两个子区间a[low...mid]和 a[mid+1...high]归并为一个有序的区间a[low...high]
   覆盖 -- 把有序区间a覆盖到原数组的对应位置上
 */
function MergeSort(nums: number[]) {
    // 归并排序
    const mergeSort = (l: number, r: number) => {
        if(l >= r) {
            return;
        }
        const mid = Math.floor((l + r) >> 1);
        mergeSort(l, mid);
        mergeSort(mid + 1, r);
        let i = l;
        let j = mid + 1;
        let p = 0;
        const answer: number[] = [];

        while(i <= mid && j <= r) {
            if(nums[i] < nums[j]) {
                answer[p] = nums[i];
                i++;
            } else {
                answer[p] = nums[j];
                j++;
            }
            p++;
        }
        while(i <= mid) {
            answer[p] = nums[i];
            p++;
            i++;
        }

        while(j <= r) {
            answer[p] = nums[j];
            p++;
            j++;
        }

        // 现在l-r这一段已经有序了，覆盖到原数组的对应位置上
        for(let k = 0; k < answer.length; k++) {
            // 注意是 k + L
            nums[k + l] = answer[k];
        }
    }
    mergeSort(0, nums.length - 1);
    return nums;
}
```
