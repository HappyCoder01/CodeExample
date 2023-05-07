/*
* 二叉树翻转
* */
function reverse(node) {
    if (node) {
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        reverse(node.left);
        reverse(node.right);
    }
}

/*
* 二叉树的最大深度
* */
function maxDepth(node) {
    if (!node) {
        return 0
    }
    return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
}

/*
* 二叉树的最小深度
* */
function minDepth(node) {
    if (!node) {
        return 0
    }
    return 1 + Math.min(minDepth(node.left), minDepth(node.right));
}