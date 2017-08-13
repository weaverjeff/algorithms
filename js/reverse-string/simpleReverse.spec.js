let reverse = require("./simpleReverse");

describe('simple reverse tests', () => {
    it('should reverse a string', () => {
        expect(reverse("hello")).toBe("olleh");
    });
});