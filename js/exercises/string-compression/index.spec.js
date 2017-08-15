let compress = require("./index");


describe('string compression', () => {
    it("should return a string that is the same as passed string when no repeats", ()=> {
      var compressed = compress("mystring");
      expect(compressed).toBe("mystring");
    });
     it("should include a repeat count when string has a repeating letter", ()=> {
      var compressed = compress("mmmystrrriiiingg");
      expect(compressed).toBe("m3ystr3i4ng2");
    })
  });