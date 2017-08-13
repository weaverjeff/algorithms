
// Given a compound word and a dictionary you have to return the 
// words in the dictionary that add up to form the given compound word. 
// e.g. target word = "leetcode" and dict = ["leet", "let", "code", "cod"]
const isInWord = (word1, word2, wordToSearch) => {
    const test1 = word1 + word2;
    const test2 = word2 + word1;
    console.log("test words", test1, test2);
    return test1 === wordToSearch || test2 === wordToSearch;
}

function compoundWords(wordToSearch, dictionary) {
    if (!dictionary || dictionary.length === 0) return [];
    
    let result = new Set();
    dictionary.forEach((word1, index1) => {
      dictionary.forEach((word2, index2) => {
        if (index1 != index2) {
          if (isInWord(word1, word2, wordToSearch)) {
            console.log("found word", word1, word2);
            result.add(word1);
            result.add(word2);
          }
        }
      });
    });
    return result;
    
  }
  
  module.exports = compoundWords;