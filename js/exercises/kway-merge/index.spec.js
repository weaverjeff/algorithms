let merge = require("./index");

describe('kway merge', () => {
    it('should merge two arrays', () => {
        let arr1 = [1, 3, 5, 7, 8, 9];
        let arr2 = [2, 4, 6];
        expect(merge(arr1, arr2)).toEqual([1,2,3,4,5,6,7,8,9]);
    });

    it('should merge three arrays', () => {
        let arr1 = [1, 4, 7, 10];
        let arr2 = [2, 5, 8];
        let arr3 = [3, 6, 9, 12]
        expect(merge(arr1, arr2, arr3)).toEqual([1,2,3,4,5,6,7,8,9,10,12]);
    });
});