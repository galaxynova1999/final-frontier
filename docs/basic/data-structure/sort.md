---
title: 常用排序算法
---


## 快速排序

实现一： 无优化版本

```javascript
const quickSort = (array) => {
    if (array.length <= 1) {
        return array;
    }
    
    let leftArray = [];
    let rightArray = [];
    let baseDigit = array[0];
    let center=[baseDigit];
    for(let i = 1; i < array.length; i++) {
        const element = array[i];
        if (element < baseDigit) {
            leftArray.push(element);
        } else if(element > baseDigit) {
            rightArray.push(element);
        } else if(element === baseDigit) {
            center.push(element);
        }
    }
    return quickSort(leftArray).concat(center, quickSort(rightArray))
};
```

实现二： 原地交换 降低空间复杂度
```javascript
function optimizedQuickSort(array, low = 0, high = array.length - 1) {
    let i = low;
    let j = high;
    if(low < high) {
        const temp = array[low]; // 保存了原始的i的值
        while(i < j) {
            // 从右向左 找到第一个小于temp的值
            while(j > i && array[j] >= temp) {
                j--;
            }

            // 找到后和i交换
            if(i < j) {
              array[i] = array[j];
              i++;
            }
            // 从左向右 找到第一个大于j的值
            while(i < j && array[i] < temp){
              i++;
            }
            // 找到后和 j 交换
            if(i < j) {
              array[j] = array[i];
              j--;
            }
        }
        // 将temp放到i的位置
        array[i] = temp;
        optimizedQuickSort(array, low, i-1);
        optimizedQuickSort(array, i+1, high);
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


## 堆排序
```javascript
const heapSort = (array) => {
    let len = array.length; // 可变的
    const swap = (i, j) => {
        [array[i], array[j]] = [array[j], array[i]];
    }

    const up = (i) => {
        let target = i;
        const leftChild = i * 2 + 1;
        const rightChild = i * 2 + 2;
        if(leftChild < len && array[leftChild] > array[target]) {
            target = leftChild;
        }
        // 注意此处是与target比较  而不是 i 目的是找到左右孩子中的最大值
        if(rightChild < len && array[rightChild] > array[target]) {
            target = rightChild;
        }
        if(target !== i) {
            swap(i, target);
            up(target);
        }
    }
    // 建堆
    for(let i = Math.floor(array.length / 2 - 1); i >= 0; i--) {
        up(i);
    }

    //排序
    for(let i = array.length - 1; i >= 0; i--) {
        swap(len - 1, 0);
        len--; // 最后一位有序了
        up(0);
    }
    return array;
}
```
