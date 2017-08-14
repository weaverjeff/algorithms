let dice = require("./index");

describe('dice tests', () => {
    it('should return the correct probability with 1 dice', () => {
        var probability = dice(1, 5);
        expect(probability).toBe(1/6);
    });

    it('should return the correct probability with 2 dice', () => {
        var probability = dice(2, 5);
        expect(probability).toBe(4/36);
    });

    it('should return the correct probability with 2 dice when total is 7', () => {
        var probability = dice(2, 7);
        expect(probability).toBe(6/36);
    });
});