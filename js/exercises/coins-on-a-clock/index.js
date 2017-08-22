// https://stackoverflow.com/questions/43825638/how-can-you-determine-how-to-place-coins-on-a-clock
// Expressing the coins as a list of buckets with the same modulo allows
// you to efficiently find the next coin to test and you don't start to
// calculate with the first penny and then do the same again starting
// with the second penny (or a 13-coin on a 12-clock), it is basically the same.
// Additionally it allows to remove and insert items at the current position in O(1).
// Also reverting is much better than copying whole states on each recursive call.

var calls;
var head;
var occupied;
var best;
var current;
var hours = 12;

function initializeList() {
    return {
        num: 10,
        vals: [10, 10, 10, 10],
        next: {
            num: 5,
            vals: [5, 5, 5, 5],
            next: {
                num: 1,
                vals: [1, 1, 1, 1],
                next: null
            }
        }
    }
}

function initalizeOccupied() {
    var retVal = [];
    for (let i = 0; i < 12; i++) {
        retVal.push(false);
    }
    return retVal;
}
function solve() {
    let coins = [10,10,10,10,5,5,5,5,1,1,1,1];
    calls = 0;
    best = [];
    current = [];
    occupied = initalizeOccupied();
    head = initializeList();
    
    solveRec(0);
    return best;
}

function solveRec(position) {
    occupied[position] = true;
    let b = head, prev = null;
    console.log(position, b);
    while (b !== null) {
        // add current node's number to position, 
        // mod 12 in case we are all the way back around the clock
        let newLocaton  = (position + b.num) % 12;
        if (occupied[newLocaton]) {
            console.log("occupied");
            if (current.length + 1 > best.length) {
                //found an occupied position, can't continue.
                //current length is better than current best
                //so move current into best.
                //console.log("current pre:", current);
                //console.log("best pre:", best);
                //console.log(b);
                best = current.slice();
                //push the last element on b.vals onto best
                best.push(b.vals[b.vals.length - 1]);
                //console.log("current post:", current);
                //console.log("best post:", best);
    
            }
        } else { //not occupied
            //we haven't been in this position before, it's not occupied.
            //push the next value in the current nodes value array into current
            //and remove it from vals.
            current.push(b.vals.pop());
            let rem = false;
            if (b.vals.length == 0) {
                rem = true; //no values left so set rem to true
                if (prev == null) {
                    //no values left in current node, set head to the next node
                    head = b.next;
                } else {
                    // no values left in current node, prev is set so set
                    // prev.next to b.next
                    prev.next = b.next;
                }
            }
            //recurse, new location is now updated with position + next coins value
            solveRec(newLocaton);
            //all the way through the current tree, check if current length is better than the best
            if (current.length > best.length) {
                //copy current into best
                best = current.slice();
            }
            if (best.length == 12) {
                //exit condition, we've placed all 12 coins.
                //console.log("found best returning");
                return;
            }
            if (rem) { //rem = true if nothing left in b.vals
                if (prev == null) {
                    //set our head to the current node
                    head = b;
                } else {
                    //set prev next to current node
                    prev.next = b; 
                }
            }
            b.vals.push(current.pop());
        }
        //move onto the next node, set previous = current
        //and current = next
        prev = b;
        b = b.next;
        //console.log("prev", prev);
        //console.log("b", b);
    }
    occupied[position] = false;

}

module.exports = solve;