class Summary {
    constructor(numbers) {
      this.numbers = numbers;
    }
    
    resolve() {
      let lastNum = null;
      var summary = this.numbers.reduce((obj, num) => { 
        if (lastNum === null) {
          obj.push( { start: num, end: null });
        } else {
          if (num - lastNum > 1) { //end of range
            obj[obj.length - 1].end = lastNum;;
            obj.push( { start: num, end: null });
          } else { //continuous range
            obj[obj.length - 1].end = num;
          }
        }
        lastNum = num;
        return obj;
        
      }, []);
      
      return summary.reduce((obj, range) => {
            obj.push(range.start + (range.end != null && range.start != range.end ? " -> " + range.end : ""));   
            return obj;
      }, []);
  
    }
  }
  
  module.exports = Summary