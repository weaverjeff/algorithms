
//https://github.com/atsepkov/puzzles/tree/master/interviews/easy/coins-on-clock

function verify(sequence) {
    var set = new Set();
    let position = 0;
    for(let i = 0; i < sequence.length; i++) {
        let coin = sequence[i];
        position = (position + coin) % 12;
        console.log("new position", position);
        if (set.has(position)) {
            return false;
        }
        set.add(position);
    }
    console.log(set);
    return true;
}

function findAll(sequence, pennies, nickels, dimes) {
    
    if (pennies < 0 || nickels < 0 || dimes < 0)
        return [];

    if (verify(sequence)) {
        if (sequence.length === 12) {
            return [sequence];
        } else {
            
            var arr1 = findAll(sequence.concat([1]), pennies - 1, nickels, dimes);
            var arr2 = findAll(sequence.concat([5]), pennies, nickels - 1, dimes);
            var arr3 = findAll(sequence.concat([10]), pennies, nickels, dimes - 1);
            var retArr = [...arr1, ...arr2, ...arr3];
            return retArr;
        }
    } else {
        return [];
    }
       
          
}

module.exports = {verify: verify, findAll: findAll};
