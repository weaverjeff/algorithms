let Tree = require("./n-ary-tree");

fdescribe('n-ary tree', () => {
    it('should create a tree with a root', () => {
        let tree = new Tree();
        tree.add(5);
        expect(tree.root.value).toBe(5);
    });

    it('should add some nodes under root', () => {
        let tree = new Tree();
        tree.add(5);
        tree.root.add(6);
        tree.root.add(7);
        tree.root.add(8);
        expect(tree.root.children.length).toBe(3);

    });
});