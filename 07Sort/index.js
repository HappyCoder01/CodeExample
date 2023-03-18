/*
* 冒泡排序
* */

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let flag = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = true;
            }
        }
        if (!flag) {
            break;
        }
    }
}

let arr1 = [1, 0, -1, 3, 2, -2]
bubbleSort(arr1)
console.log(arr1);

/*
* 插入排序
* 核心思路一直构造一个已排序数组
* */

function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (arr[j] > temp) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }

        // 必须在j的循环外面，因为有可能一直需要已排序数据后移，里层循环没有合适的时机执行
        arr[j + 1] = temp;
    }
}

let arr2 = [1, 0, -1, 3, 2, -2]
insertSort(arr2)
console.log(arr2);

/*
* 快排简单版
* */

function quickSort1(arr, start = 0, end = arr.length - 1) {
    if (start >= end) {
        return arr;
    }

    let pivot = arr[end];
    let left = [];
    let right = [];
    for (let i = start; i < end; i++) {
        arr[i] > pivot ? right.push(arr[i]) : left.push(arr[i]);
    }

    return quickSort1(left).concat(pivot, quickSort1(right));
}

console.log(quickSort1([1, 0, -1, 3, 2, -2]));

/*
* 快排正宗版
* */

function quickSort2(arr, start = 0, end = arr.length - 1) {
    if (start >= end) {
        return;
    }
    let index = partition(arr, start, end);
    quickSort2(arr, start, index - 1);
    quickSort2(arr, index + 1, end);
}

function partition(arr, start, end) {
    let pivot = arr[end];
    let i = start;
    for (let j = start; j <= end; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++
        }
    }
    [arr[end], arr[i]] = [arr[i], arr[end]];
    return i;
}

let arr3 = [1, 0, -1, 3, 2, -2]
quickSort2(arr3)
console.log(arr3);