
class Tree {
    constructor() {
        this.root = null;
    }

    add(value) {
        this.root = new Node(value);
    }

}
class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    add(value) {
        this.children.push(new Node(value));
    }
}

module.exports = Tree;