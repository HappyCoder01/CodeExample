/*
* 硬币找零问题，我们在贪心算法那一节中讲过一次。我们今天来看一个新的硬币找零问题。
* 假设我们有n种不同币值的硬币 v1，v2，……，vn（单位是元）。如果我们要支付 w 元，求最少需要多少个硬币。
* 比如，我们有 3 种不同的硬币，1 元、3 元、5 元，我们要支付 9 元，最少需要 3 个硬币
* */

function minMoneyNumber(n) {
    let arr = [0, 1, 2, 1, 2, 1];
    for (let i = 6; i <= n; i++) {
        arr[i] = 1 + Math.min(arr[i - 5], arr[i - 3], arr[i - 1]);
    }
    return arr[n];
}

console.log(minMoneyNumber(9))



