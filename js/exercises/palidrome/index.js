//http://www.geeksforgeeks.org/dynamic-programming-set-28-minimum-insertions-to-form-a-palindrome/
// -> one character -> return 0
// -> two characters -> return 0 if same or 1 if different
// -> start recursion
//    -> character's equal
//       -> recurse(start+1 and end - 1)
//    -> not equal
//       -> val1 = recurse(start+1 and end)
//       -> val2 = recurse(start and end = 1)
//       -> return the minumum of val1 and val2

let findMinimumInsertions = (str, start, end) => {
    //console.log();
    console.log(`str:${str}, start:${start}, end:${end}, comparing:${str[start]}-${str[end]}`);

    // Base Cases
    if (start > end) return Number.MAX_SAFE_INTEGER; 
    if (start == end) return 0; //one character string
    if (start == end - 1) {
        //two character string aa return 0 or ba return 1
        let result = str[start] == str[end] ? 0 : 1;
        console.log(`two char return, result:${result}`);
        return result; 
    }
      // Check if the first and last characters
      // are same. On the basis of the  comparison
      // result, decide which subproblem(s) to call
      if (str[start] === str[end]) {
        return findMinimumInsertions(str, start + 1, end - 1);
      } else {
        let val1 = findMinimumInsertions(str, start + 1, end); 
        let val2 = findMinimumInsertions(str, start, end - 1);
        let result = Math.min(val1, val2) + 1;
        console.log(`return val1:${val1}, val2:${val2}, result:${result}`);
        return result;
      }
}

let findMinimumInsertionsDynamic = (str, n) => {
    // Create a table of size n*n. table[i][j]
    // will store minumum number of insertions
    // needed to convert str[i..j] to a palindrome.
    //int table[][] = new int[n][n];
    let table = fillTable1(n);
    console.log(table);
    let l, h;
   
    // Fill the table
    for (let gap = 1; gap < n; gap++) {
        for (l = 0, h = gap; h < n; l++, h++) {
            console.log(`values=${str[l]}, ${str[h]}`);
            if ( str[l] == str[h]) {
                table[l][h] = table[l+1][h-1]
            } else {
                let val1 = table[l][h-1];
                let val2 = table[l+1][h];
                table[l][h] = Math.min(val1, val2) + 1
            }
            console.log(table);
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

    