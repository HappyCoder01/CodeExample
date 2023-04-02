/*
* 8皇后问题
* */
//当前棋盘棋子情况
let currMap = [];
//所有可行的棋子方式列表
let listMap = [];

function playQueen(row = 0) {
    if (row === 8) {
        printQueen();
        listMap.push(JSON.parse(JSON.stringify(currMap)));
        return;
    }
    for (let i = 0; i < 8; i++) {
        if (isOk(row, i)) {
            currMap[row] = i;
            playQueen(row + 1);
        }
    }
}

function isOk(row, column) {
    let leftUp = column - 1;
    let rightUp = column + 1;
    for (let i = row - 1; i >= 0; i--) {
        //检查正上方
        if (currMap[i] === column) {
            return false;
        }
        //检查左斜上方
        if (leftUp >= 0 && currMap[i] === leftUp) {
            return false;
        }
        //检查右斜上方
        if (rightUp < 8 && currMap[i] === rightUp) {
            return false;
        }
        leftUp--;
        rightUp++
    }
    return true;
}

function printQueen() {
    console.log('--start--');
    for (let row = 0; row < 8; row++) {
        let str = ''
        for (let column = 0; column < 8; column++) {
            str = `${str} ${currMap[row] === column ? 'Q' : '*'}`
        }
        console.log(str);
    }
    console.log('--end--');
}

playQueen(0);
console.log(listMap.length);
