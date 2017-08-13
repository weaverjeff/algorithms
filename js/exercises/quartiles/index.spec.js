let quartiles = require("./index");

describe('quartiles', () => {
    it('should return zeroes when numbers is empty', () => {
        expect(quartiles([])).toEqual([0,0,0]);
    });

    it('should return quartiles when passed even sorted list of numbers', () => {
        expect(quartiles([10, 20, 30, 40, 50, 60, 70, 80])).toEqual([25,45,65]);
    });

    it('should return quartiles when passed even unsorted list of numbers', () => {
        expect(quartiles([80, 30, 10, 20, 40, 50, 60, 70])).toEqual([25,45,65]);
    });

    it('should work with a unsorted list', () => {
        expect(quartiles([3, 7, 8, 5, 12, 14, 21, 13, 18])).toEqual([6,12,16]);
    });

    it('should return quartiles when passed odd sorted list of numbers', () => {
        expect(quartiles([10, 20, 30, 40, 50, 60, 70, 80, 90])).toEqual([25,50,75]);
    });

    it('should work with odd length small segment', () => {
        //3 7 8 5 12 14 21 15 18 14
        //3 5 7 8 12 | 14 14 15 29 21
        //3 5 7 8 12 | 14 14 15 29 21
        //3 5 [7] 8 12 | 14 14 [15] 29 21
        let input = "3 7 8 5 12 14 21 15 18 14";
        let numbers = input.split(" ").map(Number);
        expect(quartiles(numbers)).toEqual([7, 13, 15]);
    });


});