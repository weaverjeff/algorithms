
function sumTree(tree) {
    if (!tree.root) return;

    return sum(tree.root);
    
}

function sum(node) {
    if (!node) {
        return 0;
    }
    return node.value + sum(node.left) + sum(node.right);
}
module.exports = sumTree;