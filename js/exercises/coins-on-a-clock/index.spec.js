let solve = require("./index");
let solveDynamic = require("./index-dynamic");
let solveRecursive = require("./index-recursive");

describe('coins on a clock', () => {
    it('should find the result with set coins and hours', () => {
        var result = solve();     
        //console.log(result);
        expect(result).toEqual([ 10, 10, 5, 1, 1, 1, 5, 10, 10, 1, 5, 5 ]);
    });

    it('should find the result with dynamic coins and hours', () => {
        var result = solveDynamic([1,1,1,1,5,5,5,5,10,10,10,10], 12);     
        console.log(result);
        expect(result).toEqual([ 10, 10, 5, 1, 1, 1, 5, 10, 10, 1, 5, 5 ]);
    });

    it('recursive', () => {
        var result = solveRecursive.verify([ 1, 1, 10, 10, 5, 5, 1, 10, 10, 1, 5, 5 ]);
        console.log("result", result);
        expect(true).toBe(true);
    });

    fit('recursive2', () => {
        var result = solveRecursive.findAll([], 4, 4, 4);
        console.log("result", result);
        expect(true).toBe(true);
    });
});
