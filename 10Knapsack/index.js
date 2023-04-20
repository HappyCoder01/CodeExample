/*
* 备忘录方式
* */

function knapsack(items, weight) {
    // map用于备忘录，减少重复计算。核心是第i个商品，当前curWeight重量是否计算过。数组记得length+1
    let map = new Array(items.length + 1).fill(1).map(() => new Array(weight).fill(false));
    let maxWeight = 0;

    function calc(i, curWeight) {
        // 所有物品装入情况或者已经装满情况下退出
        if (i === items.length || curWeight === weight) {
            if (curWeight > maxWeight) {//更新最大重量
                maxWeight = curWeight;
            }
            return;
        }

        // 选择不装入
        if (!map[i + 1][curWeight]) {
            map[i + 1][curWeight] = true;
            calc(i + 1, curWeight);
        }

        // 选择装入
        let temp = curWeight + items[i];
        if (temp <= weight && !map[i + 1][temp]) {
            map[i + 1][temp] = true;
            calc(i + 1, temp);
        }
    }

    calc(0, 0);
    return maxWeight;
}

console.log(knapsack([2, 2, 4, 6, 3], 9));
