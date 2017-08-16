let solve = require("./index");

describe('coins on a clock', () => {
    it('should find the a result', () => {
        var result = solve([1,1,1,1,5,5,5,5,10,10,10,10], 12);     
        console.log(result);
        expect(result).toEqual([ 10, 10, 5, 1, 1, 1, 5, 10, 10, 1, 5, 5 ]);
    });
});
