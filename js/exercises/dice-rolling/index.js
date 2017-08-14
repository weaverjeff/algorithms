let Combinatorics = require('js-combinatorics')

dice = (numberOfDice, number) => {
   let cmb = Combinatorics.baseN([1,2,3,4, 5, 6], numberOfDice);
   let matchedCombos =0;
   let totalCombos = 0;

   while(a = cmb.next()) {
        totalCombos ++;
        let total = a.reduce((total, value) => {
            return total += value;
        }, 0);

        if(total === number) {
            matchedCombos++
            console.log(`matched ${a}`);
        } else {
            console.log(a);
        } 
    }
   
    console.log("totals", matchedCombos, totalCombos);
    return matchedCombos / totalCombos;
}

module.exports = dice;