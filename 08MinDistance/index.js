/*
* 左上角为起点，只能向右或者向下走，计算最短路径
* */
let arr = [
    [1, 1, 3],
    [4, 1, 1],
    [7, 8, 1]
]

function minDistance(arr) {
    let tempArr = JSON.parse(JSON.stringify(arr));
    let n = tempArr.length;
    let m = tempArr[0].length;

    for (let i = 1; i < m; i++) {
        tempArr[0][i] = tempArr[0][i - 1] + tempArr[0][i];
    }

    for (let j = 1; j < n; j++) {
        tempArr[j][0] = tempArr[j - 1][0] + tempArr[j][0];
    }

    for (let r = 1; r < n; r++) {
        for (let c = 1; c < m; c++) {
            tempArr[r][c] = Math.min(tempArr[r - 1][c], tempArr[r][c - 1]) + tempArr[r][c]
        }
    }
    return tempArr[n - 1][m - 1];
}

console.log(minDistance(arr));