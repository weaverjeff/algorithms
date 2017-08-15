let finder = require("./index");
let find1 = finder.find1;
let find2 = finder.find2;
let find3 = finder.find3;

describe('find1-> longest substring', () => {
    it('should return a string when one character long', () => {
        expect(find1("a")).toBe("a");
    });

    it('should return e-g when geegsforgeeks', () => {
        expect(find1("geeksforgeeks")).toBe("eksforg");
    });
});

describe('find2-> longest substring', () => {
    it('should return a string when one character long', () => {
        expect(find2("a")).toBe("a");
    });

    it('should return e-g when geegsforgeeks', () => {
        expect(find2("geeksforgeeks")).toBe("eksforg");
    });
});

describe('find3-> longest substring', () => {
    it('should return a string when one character long', () => {
        expect(find3("a")).toBe("a");
    });

    it('should return e-g when geegsforgeeks', () => {
        expect(find3("geeksforgeeks")).toBe("eksforg");
    });
});