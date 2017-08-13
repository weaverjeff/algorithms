function merge(a, b) {
    var answer = [];
    var i = 0, j = 0;
    while (i < a.length && j < b.length) {
      if (a[i] < b[j]) {
          answer.push(a[i]); 
          i++;
      }else {
          answer.push(b[j]);
          j++;
      }
    }
    
    if (i < a.length) {
      answer.push(...a.slice(i));
    } else if (j < b.length) {
      answer.push(...b.slice(j));
    }

    return answer;
  }

  module.exports = merge;