//http://www.geeksforgeeks.org/dynamic-programming-set-28-minimum-insertions-to-form-a-palindrome/

let findMinimumInsertions = (str, l, h) => {
    // Base Cases
    if (l > h) return Number.MAX_SAFE_INTEGER; 
    if (l == h) return 0; //one character string
    if (l == h - 1) return (str[l] == str[h]) ? 0 : 1; //two character string aa return 0 or ba return 1
     
      // Check if the first and last characters
      // are same. On the basis of the  comparison
      // result, decide which subproblem(s) to call
      if (str[l] === str[h]) {
        return findMinimumInsertions(str, l + 1, h - 1);
      } else {
        let val1 = findMinimumInsertions(str, l + 1, h); 
        let val2 = findMinimumInsertions(str, l, h - 1);
        return Math.min(val1, val2) + 1;
      }
}

let findMinimumInsertionsDynamic = (str, n) => {
    // Create a table of size n*n. table[i][j]
    // will store minumum number of insertions
    // needed to convert str[i..j] to a palindrome.
    //int table[][] = new int[n][n];
    let table = fillTable1(n);
    let l, h;
   
    // Fill the table
    for (let gap = 1; gap < n; gap++) {
        console.log("outer loop");
        for (l = 0, h = gap; h < n; l++, h++) {
            console.log("inner loop", l, h, gap, n);
            if ( str[l] == str[h]) {
                table[l][h] = table[l+1][h-1]
            } else {
                let val1 = table[l][h-1];
                let val2 = table[l+1][h];
                table[l][h] = Math.min(val1, val2) + 1
            }
        }
    } 

    console.log("table", table);
    // Return minimum number of insertions
    // for str[0..n-1]
    return table[0][n-1];
}

function fillTable2(n) {
    let table = new Array(n);
    let cols = new Array(n);
    cols.fill(0);
    table.fill(cols);
    return table;
}
function fillTable1(n) {
    let table = [];
    for(let i = 0; i < n; i++) {
        table[i] = [];
        for(let j = 0; j < n; j++) {
            table[i][j] = 0;
        }
    }
    return table;
}
module.exports = { "findMinimumInsertions": findMinimumInsertions, "findMinimumInsertionsDynamic": findMinimumInsertionsDynamic };

    