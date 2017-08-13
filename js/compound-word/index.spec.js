let compoundWords = require("./index");
describe('compound word', () => {
    it("should return empty array when dictionary is empty", ()=> {
        const word = "helloworld";
        const dict = [];
        expect(compoundWords(word, dict).length).toBe(0);
      });
      it("should return two elements when dictionary matches exactly", ()=> {
        const word = "helloworld";
        const dict = ["hello", "world"];
        
        const answer = compoundWords(word, dict);
        expect(answer.size).toBe(2);
        expect(answer.has("hello")).toBe(true);
        expect(answer.has("world")).toBe(true);
      });
      
       it("should not find partial matches", ()=> {
        const word = "helloworld";
        const dict = ["hello", "world", "w"];
        
        const answer = compoundWords(word, dict);
         
        expect(answer.has("hello")).toBe(true);
        expect(answer.has("world")).toBe(true);
        expect(answer.has("w")).toBe(false);
         
        expect(answer.size).toBe(2);
      });
      it('should return the correct words', () => {
        let answer = compoundWords("leetcode", ["leet", "lee", "code", "ode"]);
        expect(answer.has("leet")).toBe(true);
        expect(answer.has("code")).toBe(true);
        
    });

});