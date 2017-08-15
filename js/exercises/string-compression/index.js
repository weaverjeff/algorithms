
const compress = (str) => {
    let charCount = 1;
    let compressed = [str[0]];
    
    for(let i = 1; i < str.length; i++) {
      if (compressed[compressed.length -1] == str[i]) {
        charCount++;
      } else {
        if (charCount > 1) {
          compressed.push(charCount);
          charCount = 1;
        }
        compressed.push(str[i]);  
      }
    }
    if (charCount > 1) {
      compressed.push(charCount);
    }
    return compressed.join("");
   
}

module.exports = compress;