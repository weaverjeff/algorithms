let merge = require('./index');
describe('array merge tests', () => {
    it('should merge sorted arrays and maintain order', () => {
        const result = merge([1, 3, 5], [2, 4, 6, 7, 8]);
        expect(result).toEqual([1,2,3,4,5,6,7,8]);
    });
});