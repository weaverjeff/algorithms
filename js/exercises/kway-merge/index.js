
let merge = (...arrays) => {
    let retArray = [];
    let k = arrays.length;
    let currentPosition = new Array(k).fill(0); // [0,0,0]

    while(true) {
        let indexOfArrayWithMin = 0;
        //let minValue = Math.max();
        let minValue = 99999999999; //todo:  fix this
        let arraysWithData = 0;
        for (var i = 0; i < arrays.length; i++) {
            let array = arrays[i];
            let pos = currentPosition[i];
            if (pos < array.length && pos !== -1) { //pos of -1 mean the array has been iterated through
                arraysWithData++;
                if (array[pos] < minValue) {
                    indexOfArrayWithMin = i;
                    minValue = array[pos];
                }
            } else {
                currentPosition[i] = -1;
            } 
        }
        
        console.log(`found min: ${minValue}, index: ${indexOfArrayWithMin}`)
    
        retArray.push(minValue);
        currentPosition[indexOfArrayWithMin] ++;
        if (arraysWithData === 1) { //if only 1 left, append it to the end, it must be > than all other #'s
            let remainingIndex = getIndexOfValueGreaterThanZero(currentPosition);
            console.log("remainingindex", remainingIndex);
            retArray.push(...arrays[remainingIndex].slice(currentPosition[remainingIndex]));
            break; 
        }
    }
    
    return retArray;
}

function getIndexOfValueGreaterThanZero(array) {
    for (var i = 0; i < array.length; i++) {
       if (array[i] >= 0) {
           return i;
       }
        
    }
}
module.exports = merge;