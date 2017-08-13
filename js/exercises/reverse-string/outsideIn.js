
function reverse(str) {
    let stringArray = str.split("");
    let right = stringArray.length - 1;
    let left = 0;
    while(left < right) {
        const temp = stringArray[left];
        stringArray[left] = stringArray[right];
        stringArray[right] = temp;
        left += 1;
        right -= 1;    
    }
    
    return stringArray.join('');
   
  }

  module.exports = reverse;