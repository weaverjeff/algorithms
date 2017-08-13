class Bst {
    constructor() {
        this.root = null;
    }

    add(value) {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }

        this.addNode(this.root, value);
        
    }

    addNode(node, value) {
        if (!node) return;

        if (value < node.value) {
            //go left
            if (node.left) {
                this.addNode(node.left, value);
                return;
            } else {
                node.left = new Node(value);
                return;
            }
        } else if (value > node.value) {
            //go right
            if (node.right) {
                this.addNode(node.right, value);
                return;
            } else {
                node.right = new Node(value);
                return;
            }
        }

    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

module.exports = Bst;