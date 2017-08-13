
function reverse(str) {
    let stringArray = str.split("");
    let right = stringArray.length - 1;
    let left = 0;
    while(left < right) {
        if (!isAlpha(stringArray[left])) {
          left += 1;
        } else if (!isAlpha(stringArray[right])) {
           right -= 1;
        } else {
          const temp = stringArray[left];
          stringArray[left] = stringArray[right];
          stringArray[right] = temp;
          left += 1;
          right -= 1;    
        }
    }
    
    return stringArray.join('');
  }

  function isAlpha(char) {
    const code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }

    return true;
  }

  module.exports = reverse;