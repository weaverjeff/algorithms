let sumTree = require("./index");
let Bst = require("../../data-structures/bst");

describe('tree summing', () => {
    it('should calculate the total of the tree', () => {
        let tree = new Bst();
        tree.add(4);
        tree.add(5);
        tree.add(2);
        tree.add(20);
        tree.add(10);

        //4 + 2 + 4(was 5) + 5 (was 20) + 10 = 25
/*
            4
        2         5
                    20
                10

*/
    
        let result = sumTree(tree);
        expect(result).toBe(25);
    });
});