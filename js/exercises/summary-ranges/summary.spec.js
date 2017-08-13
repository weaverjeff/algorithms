let Summary = require("./summary");

describe('test', () => {
    it("should handle ending number without a range", ()=> {
      const numbers = [0,1,2,4,5,7];
      let summary = new Summary(numbers).resolve();
      console.log(summary);
      
      expect(summary[0]).toBe("0 -> 2");
      expect(summary[1]).toBe("4 -> 5");
      expect(summary[2]).toBe("7");
      
    });
     it("should handle ending number with a range", ()=> {
      const numbers = [0,1,2,4,5,6,7];
      let summary = new Summary(numbers).resolve();
      console.log(summary);
      
      expect(summary[0]).toBe("0 -> 2");
      expect(summary[1]).toBe("4 -> 7");
      
    });
    
     it("should handle duplicate numbers", ()=> {
      const numbers = [0,1,2,2, 4,5,7,7];
      let summary = new Summary(numbers).resolve();
      console.log(summary);
      
      expect(summary[0]).toBe("0 -> 2");
      expect(summary[1]).toBe("4 -> 5");
      expect(summary[2]).toBe("7");
       
      
    });
    it("should handle negative numbers", ()=> {
      
      const numbers = [-5, -4, 0,1,2,2, 4,5,7,7];
      let summary = new Summary(numbers).resolve();
      console.log(summary);
      
      expect(summary[0]).toBe("-5 -> -4");
      expect(summary[1]).toBe("0 -> 2");
      expect(summary[2]).toBe("4 -> 5");
      expect(summary[3]).toBe("7");
       
      
    });
    
  });