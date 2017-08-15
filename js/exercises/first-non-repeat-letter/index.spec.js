let find = require("./index");

describe('find first non repeating letter', () => {
    it('should find the first letter in a word with length of one', () => {
        expect(find("a")).toBe("a");
    });

    it('should find the first letter in a word two unique letters', () => {
        expect(find("ab")).toBe("a");
    });

    it('should find a letter in the middle', () => {
        expect(find("abacbde")).toBe("c");
    });

    it('should return -1 when when no unique characters', () => {
        expect(find("abacbdcedfegfhgh")).toBe("-1");
    });
});