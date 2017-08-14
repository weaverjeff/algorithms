//http://www.geeksforgeeks.org/check-if-a-number-is-power-of-another-number/
/* Returns true if y is a power of x */
let powerOf = (x, y) => {
    //time complexity = O(Logxy)
     if (x == 1) {
        return (y == 1);
     }
     // Repeatedly compute power of x (x ^ i)
     let pow = 1;
     while(pow < y) {
         console.log(`pow=${pow} * ${x}`);
        pow = pow * x;
     }
     console.log("pow:", pow);
     return (pow == y);
}

module.exports = powerOf;