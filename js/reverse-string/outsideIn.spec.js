let reverse = require("./outsideIn");
describe('should reverse by swapping characters', () => {
    it('should reverse the string', () => {
        expect(reverse("hello")).toBe("olleh");
    });
});