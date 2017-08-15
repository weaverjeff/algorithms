let find = (str) => {
    //O(n^2)
    if (str.length === 1) return str;
    for(let i = 0; i < str.length; i++) {
        let found = false;
        for(j = 0; j < str.length; j++) {
            if (j === i) continue;

            if (str[i] === str[j]) {
                found = true;
            }
        }
        if (!found) {
            return str[i];
        }
    }
    return "-1";
}

let find2 = (str) => {
    //O(n)
    let set1 = new Set();
    let set2 = new Set();
    for (var i = 0; i < str.length; i++) {
        if (set1.has(str[i])) { //we've already seen the letter, it's not unique
            set2.add(str[i]); //move the item to set 2 where dead non-unique letters go
            set1.delete(str[i]); 
        } else {
            if (!set2.has(str[i])) {  //it's not in set1, so see if we've already marked it duplicate in set 2
                set1.add(str[i]); //for now it's unique
            }
        }
    }
    //any letters left in set1 must be unique
    if (set1.size >= 0) {
        for(val of set1.keys()) {
            //return the first item in set 1
            return val;
        }
    }
        
    return "-1";
}


module.exports = find2;