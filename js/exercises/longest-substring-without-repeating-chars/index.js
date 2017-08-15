// https://leetcode.com/articles/longest-substring-without-repeating-characters/

let find1 = (s) => {
    //O(n^3)
    let n = s.length;
    let ans = "";
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            if (allUnique(s, i, j)) {
                if ((j - i) > ans.length) {
                    ans = s.substring(i, j);
                }
            }
        }
    }
    return ans;

}

function allUnique(s, start, end) {
    let set = new Set();
    for (let i = start; i < end; i++) {
        let ch = s[i];
        if (set.has(ch)) return false;
        set.add(ch);
    }
    return true;
}

let find2 = (s) => {
    //O(2n)=O(n)
    let n = s.length;
    let set = new Set();
    let ans = "", i = 0, j = 0;
    while (i < n && j < n) {
        
        // try to extend the range [i, j]
        if (!set.has(s[j])){
            set.add(s[j]);
            j++;
            if ((j - i) > ans.length) {
                ans = s.substring(i, j);
                console.log("answer=>", ans);
            }
            //ans = Math.max(ans, j - i);
        }
        else {
            set.delete(s[i]);
            i++;
        }
        console.log(set);
    }
    //console.log(set);
    return ans;
};

let find3 = (s) =>{
    //O(n)
    let n = s.length, ans = "", j = 0, i=0;
    let map = new Map();
    // try to extend the range [i, j]
    for (j = 0, i = 0; j < n; j++) {
        if (map.has(s[j])) {
            i = Math.max(map.get(s[j]), i);
        }
        if ((j - i + 1) > ans.length) {
            ans = s.substring(i, j + 1);
        }
        map.set(s[j], j + 1);
    }
    return ans;
}
module.exports = { "find1" : find1, "find2": find2, "find3": find3 };