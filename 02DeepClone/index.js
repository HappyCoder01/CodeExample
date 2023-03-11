let parentData = {
    a: [1, 2, 3, {a: 'a'}],
    b: 1,
    child: {
        name: 'child'
    }
}
parentData.child.parent = parentData

function deepClone(data, map = new WeakMap()) {
    if (map.has(data)) {
        return map.get(data);
    }

    let type = Object.prototype.toString.call(data);
    let result;
    if (type === '[object Object]') {
        result = {};
        map.set(data, result);
        let keys = Object.keys(data);
        for (let key of keys) {
            result[key] = deepClone(data[key], map);
        }
    } else if (type === '[object Array]') {
        result = [];
        map.set(data, result);
        for (let i = 0; i < data.length; i++) {
            result[i] = deepClone(data[i], map);
        }
    } else {
        result = data;
    }

    return result;
}