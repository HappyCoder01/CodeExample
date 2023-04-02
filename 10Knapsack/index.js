/*
* 备忘录方式
* */

let maxWeight = Number.MIN_SAFE_INTEGER;
let map = [];

function knapsack(items, i, currWeight, weight) {
    // 初始化备忘录
    if (i === 0) {
        map = [];
        for (let j = 0; j <= items.length; j++) {
            map.push([]);
        }
    }
    if (i === items.length || currWeight === weight) {
        if (currWeight > maxWeight) {
            maxWeight = currWeight;
        }
        return;
    }
    if (!map[i + 1][currWeight]) {
        map[i + 1][currWeight] = true;
        knapsack(items, i + 1, currWeight, weight);
    }

    if (items[i + 1] + currWeight <= weight) {
        if (!map[i + 1][currWeight + items[i + 1]]) {
            map[i + 1][currWeight + items[i + 1]] = true;
            knapsack(items, i + 1, currWeight + items[i + 1], weight);
        }
    }
}

knapsack([2, 2, 4, 6, 3], 0, 0, 9);

console.log(maxWeight);
