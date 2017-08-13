//How to collect data frequency and retrieve the top k elements with max frequency
//can be optimized using trie and minheap
// http://www.geeksforgeeks.org/find-the-k-most-frequent-words-from-a-file/

let find = (values, frequencyLimit) => {
    var exceedsMax = {};
    
    var results = values.reduce((obj, val) => {
        console.log(val, obj); 
        if (obj[val]) {
           obj[val] ++;
          if (obj[val] >= frequencyLimit) {
            exceedsMax[val] = obj[val];
          }
         } else {
           obj[val] = 1;
         }
        return obj;
      }, {});
      console.log(results);
      return exceedsMax;
    /*
    for(let key in results) {
        if (key < frequencyLimit) {
          delete results[key];
        }
      }
      return results;
      */
  };

  module.exports = find;