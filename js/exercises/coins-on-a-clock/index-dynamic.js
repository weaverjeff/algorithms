// https://stackoverflow.com/questions/43825638/how-can-you-determine-how-to-place-coins-on-a-clock
// Expressing the coins as a list of buckets with the same modulo allows
// you to efficiently find the next coin to test and you don't start to
// calculate with the first penny and then do the same again starting
// with the second penny (or a 13-coin on a 12-clock), it is basically the same.
// Additionally it allows to remove and insert items at the current position in O(1).
// Also reverting is much better than copying whole states on each recursive call.
var h;
var calls;
var head;
var limit;
var occupied;
var best;
var current;

function solve(coins, hours) {
    h = hours;
    coins.sort(function(a, b) {
        let x = a % hours, y = b % hours;
        if (x > y)
            return -1;
        if (x < y)
            return 1;
        return 0;
    });
    let mod = coins[0] % hours;
    head = {num: mod, vals: [coins[0]], next: null};
    let b = head, coinCount = 1;
    for (let i = 1; i < coins.length && mod != 0; i++) {
        let m = coins[i] % hours;
        if (m == mod) {
            b.vals.push(coins[i]);
        } else {
            b.next = {num: m, vals: [coins[i]], next: null};
            b = b.next;
            mod = m;
        }
        coinCount++;
    }
   
    limit = coinCount < hours ? coinCount : hours;
    occupied = [];
    for (let i = 0; i < hours; i++)
        occupied.push(false);
    best = [];
    current = [];
    solveRec(0);
    //return JSON.stringify(best);
    return best;
}

function solveRec(pos) {
    occupied[pos] = true;
    let b = head, prev = null;
    while (b !== null) {
        let newLocaton  = (pos + b.num) % h;
        if (!occupied[newLocaton]) {
            current.push(b.vals.pop());
            let rem = false;
            if (b.vals.length == 0) {
                if (prev == null)
                    head = b.next;
                else
                    prev.next = b.next;
                rem = true;
            }
            solveRec(newLocaton);
            if (current.length > best.length)
                best = current.slice();
            if (best.length == limit)
                return;
            if (rem) {
                if (prev == null)
                    head = b;
                else
                    prev.next = b;
            }
            b.vals.push(current.pop());
        } else if (current.length + 1 > best.length) {
            best = current.slice();
            best.push(b.vals[b.vals.length - 1]);
        }
        prev = b;
        b = b.next;
    }
    occupied[pos] = false;

}

module.exports = solve;