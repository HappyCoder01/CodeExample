/*
* Array to tree
* 核心思路：用map，记录id和node的关系，每一个节点都去找父节点，找到了给父节点增加子节点
* 未能找到父节点的为根节点，最后返回根节点
* */
let data = [
    {id: 0, parentId: null, name: '生物'},
    {id: 1, parentId: 0, name: '动物'},
    {id: 2, parentId: 0, name: '植物'},
    {id: 3, parentId: 0, name: '微生物'},
    {id: 4, parentId: 1, name: '哺乳动物'},
    {id: 5, parentId: 1, name: '卵生动物'},
    {id: 6, parentId: 2, name: '种子植物'},
    {id: 7, parentId: 2, name: '蕨类植物'},
    {id: 8, parentId: 4, name: '大象'},
    {id: 9, parentId: 4, name: '海豚'},
    {id: 10, parentId: 4, name: '猩猩'},
    {id: 11, parentId: 5, name: '蟒蛇'},
    {id: 12, parentId: 5, name: '麻雀'}
];

function arrayToTree(arr) {
    let res = null;
    let map = {};

    // 深拷贝arr，避免影响原始参数产生副作用
    arr = JSON.parse(JSON.stringify(arr));
    arr.forEach(v => map[v.id] = v);
    for (let i = 0; i < arr.length; i++) {
        let parent = map[arr[i].parentId];
        if (parent) {
            if (!Array.isArray(parent.children)) {
                parent.children = [];
            }
            parent.children.push(arr[i]);
        } else {
            res = arr[i]
        }
    }
    return res;
}

console.dir(arrayToTree(data));
/*
* Tree to Array
* 核心思路，利用队列处理，开始至添加跟节点，将一个出去子节点的节点添加到返回数组中，将子节点添加到队列
* 队列长度为0退出处理
* */
let node = {
    "id": 0,
    "parentId": null,
    "name": "生物",
    "children": [
        {
            "id": 1,
            "parentId": 0,
            "name": "动物",
            "children": [{
                "id": 4,
                "parentId": 1,
                "name": "哺乳动物",
                "children": [
                    {"id": 8, "parentId": 4, "name": "大象"},
                    {"id": 9, "parentId": 4, "name": "海豚"},
                    {"id": 10, "parentId": 4, "name": "猩猩"}
                ]
            }, {
                "id": 5,
                "parentId": 1,
                "name": "卵生动物",
                "children": [
                    {"id": 11, "parentId": 5, "name": "蟒蛇"},
                    {"id": 12, "parentId": 5, "name": "麻雀"}
                ]
            }]
        },
        {
            "id": 2,
            "parentId": 0,
            "name": "植物",
            "children": [
                {"id": 6, "parentId": 2, "name": "种子植物"},
                {"id": 7, "parentId": 2, "name": "蕨类植物"}
            ]
        },
        {"id": 3, "parentId": 0, "name": "微生物"}]
}

function treeToArray(tree) {
    // 深拷贝避免影响传入参数，产生副作用。
    tree = JSON.parse(JSON.stringify(tree));
    let res = [];
    let queue = [tree];
    while (queue.length > 0) {
        let item = queue.shift();
        let temp = {
            ...item
        }
        delete temp.children;
        res.push(temp);
        if (Array.isArray(item.children)) {
            item.children.forEach(v => queue.push(v));
        }
    }
    return res;
}

console.dir(treeToArray(node));
