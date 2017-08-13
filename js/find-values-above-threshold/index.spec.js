let find = require("./index");

describe('find values above threshold', () => {
    it('should find values that occur greater than the threshold', () => {
        let result = find(["a", "b", "a", "c", "a", "a", "b"], 3);
        expect(result).toEqual({"a": 4});
    });
});