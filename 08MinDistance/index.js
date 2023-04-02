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
    let row = tempArr.length;
    let column = tempArr[0].length;

    for (let i = 1; i < column; i++) {
        tempArr[0][i] = tempArr[0][i - 1] + tempArr[0][i];
    }

    for (let j = 1; j < row; j++) {
        tempArr[j][0] = tempArr[j - 1][0] + tempArr[j][0];
    }

    for (let r = 1; r < row; r++) {
        for (let c = 1; c < column; c++) {
            tempArr[r][c] = Math.min(tempArr[r - 1][c], tempArr[r][c - 1]) + tempArr[r][c]
        }
    }
    return tempArr[row - 1][column - 1];
}

console.log(minDistance(arr));