Promise.all = function (arr) {
    if (!Array.isArray(arr)) {
        throw Error('Params must be array');
    }
    let result = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            Promise.resolve(arr[i]).then((data) => {
                result[i] = data;
                count++;
                if (count === arr.length) {
                    resolve(result);
                }
            }).catch(reject)
        }
    })
}

