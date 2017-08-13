let reverse = require("./ignoreNonAlphaRegex");

describe('should reverse by swapping characters', () => {
    it('should reverse the string', () => {
        expect(reverse("hello")).toBe("olleh");
    });

    it('should reverse the string leaving special characters alone', () => {
        expect(reverse("h<el>lo")).toBe("h<le>ol");
    });
});
