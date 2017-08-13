
/*
Find the sum of all of the values in a tree, given that if the value of a 
child is greater than it's parent, the child reduces it's value to the parent's equal?  
Question about recursively changing the values of a tree

*/
function sumTree(tree) {
    if (!tree.root) return;

    return sum(tree.root, tree.root.value);
    
}

function sum(node, parentValue) {
    if (!node) {
        return 0;
    }
    let value = node.value;
    if (node.value > parentValue) {
        value = parentValue;
    }
    return value + sum(node.left, node.value) + sum(node.right, node.value);
}
module.exports = sumTree;