let palidrome = require("./index");
let findMinimumInsertions = palidrome.findMinimumInsertions;
let findMinimumInsertionsDynamic = palidrome.findMinimumInsertionsDynamic;

fdescribe('minimum insertions for palidrome', () => {
    it("should return one when adding one character at begining", ()=> {
        let word = "ab";
        console.log(word.split(""));
        let result = findMinimumInsertions(word.split(""), 0, word.length -1);
        expect(result).toBe(1);
      });
      it("should return three when adding three character at begining", ()=> {
        let word = "abcd";
        console.log(word.split(""));
        let result = findMinimumInsertions(word.split(""), 0, word.length -1);
        expect(result).toBe(3);
      });
      it("should return two when adding two character in the middle", ()=> {
        let word = "abcda";
        console.log(word.split(""));
        let result = findMinimumInsertions(word.split(""), 0, word.length -1);
        expect(result).toBe(2);
      });
      it("should return four when adding four characters at the beginning", ()=> {
        let word = "abcde";
        console.log(word.split(""));
        let result = findMinimumInsertions(word.split(""), 0, word.length -1);
        expect(result).toBe(4);
      });


      it("should return one when adding one character at begining", ()=> {
        let word = "ab";
        console.log(word.split(""));
        let result = findMinimumInsertionsDynamic(word.split(""), word.length);
        expect(result).toBe(1);
      });
      it("should return three when adding three character at begining", ()=> {
        let word = "abcd";
        console.log(word.split(""));
        let result = findMinimumInsertionsDynamic(word.split(""), word.length);
        expect(result).toBe(3);
      });
      it("should return two when adding two character in the middle", ()=> {
        let word = "abcda";
        console.log(word.split(""));
        let result = findMinimumInsertionsDynamic(word.split(""), word.length);
        expect(result).toBe(2);
      });
      fit("should return four when adding four characters at the beginning", ()=> {
        let word = "abcde";
        console.log(word.split(""));
        let result = findMinimumInsertionsDynamic(word.split(""), word.length);
        expect(result).toBe(4);
      });
});