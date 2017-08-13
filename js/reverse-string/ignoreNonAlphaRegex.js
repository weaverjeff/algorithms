

function reverse(str) {
    var answer = str.replace(/[a-z]+/gi, (s) => {
        return s.split('').reverse().join('')
      });
      
      console.log("answer", answer);
      return answer;
  }
  module.exports = reverse;