let Bst = require("./bst");
describe('bst tests', () => {
    it('should add a root and set leafs to null', () => {
        let bst = new Bst();
        bst.add(8);
        expect(bst.root.value).toBe(8);
        expect(bst.root.left).toBe(null);
        expect(bst.root.right).toBe(null);
    });

    it('should add nodes in the right spots', () => {
        let bst = new Bst();
        bst.add(8);
        bst.add(4);
        bst.add(20);
        bst.add(3);
        bst.add(10);
        bst.add(22);
        bst.add(5);
        
        expect(bst.root.value).toBe(8);
        expect(bst.root.left.value).toBe(4);
        expect(bst.root.left.left.value).toBe(3);
        expect(bst.root.left.right.value).toBe(5);
        expect(bst.root.right.value).toBe(20);
        expect(bst.root.right.left.value).toBe(10);
        expect(bst.root.right.right.value).toBe(22);
    });

    

});