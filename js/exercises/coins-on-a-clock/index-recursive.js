

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

/*
def verify(sequence):
coinsonclock = [None] * clocksize
position = 0
for coin in sequence:
    position = (position + coinvalue[coin]) % clocksize
    if (coinsonclock[position]): return False
    coinsonclock[position] = coin
return True
*/

/*
def findall(sequence, pennies, nickels, dimes):
if pennies < 0 or nickels < 0 or dimes < 0:
    return []
if verify(sequence):
    if len(sequence) == clocksize:
        return [sequence]
    else:
        return (
            [], 4, 4, 4
            [P], 3, 4, 4
                [PP], 2, 4, 4
                    [PPP], 1, 4, 4
                    [PPN], 2, 3, 4
                [PN], 3, 3, 4
                [PD], 3, 4, 3

            [N], 4, 3, 4
            [D], 4, 4, 3
            findall(sequence + ['P'], pennies - 1, nickels, dimes) +
            findall(sequence + ['N'], pennies, nickels - 1, dimes) +
            findall(sequence + ['D'], pennies, nickels, dimes - 1)
            )
else:
    return []
*/