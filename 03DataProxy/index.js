
let test = {
    a: 1,
    b: {
        b1: 2
    }
}

function dataProxy(data, path = []) {
    return new Proxy(() => {}, {
        get: (target, key) => {
            return dataProxy(data, path.concat(key))
        },
        apply: (target, ctx, args) => {
            let value = data;
            let defaultValue = args[0] || null;
            for (let item of path) {
                value = value[item];
                if (value === null || value === undefined) {
                    return defaultValue;
                }
            }
            return (value === null || value === undefined) ? defaultValue : value;
        }
    })
}

let proxyData = dataProxy(test);
console.log(proxyData.a.b.c.d(true));
console.log(proxyData.a.b.c.d());
console.log(proxyData.b.b1());