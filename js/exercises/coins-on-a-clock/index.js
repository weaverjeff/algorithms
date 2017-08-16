
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
        let m = (pos + b.num) % h;
        if (!occupied[m]) {
            current.push(b.vals.pop());
            let rem = false;
            if (b.vals.length == 0) {
                if (prev == null)
                    head = b.next;
                else
                    prev.next = b.next;
                rem = true;
            }
            solveRec(m);
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