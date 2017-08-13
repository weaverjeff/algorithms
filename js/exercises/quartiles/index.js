function quartiles(numbers = []) {
    if (numbers.length === 0) return [0,0,0];

    numbers = numbers.sort((a, b) => a - b); //sort numerically

    console.log(numbers);

    //[ 3 5 [7] 8 12 | 14 14 [15] 18 21 ]
    //length=10, middle=5, segmentLength=5 twentyFivePercentMiddle=2.5
    //leftIndex=2.5, rightIndex = 7.5

    //[ 10 20 | 30 40 [50] 60 70 | 80 90 ]
    //length = 9, middle = 4.5, segmentLength=4 twentyFivePercentMiddle=2
    //leftindex=2, rightIndex=7
    
    let middle = getMiddle(numbers.length);
    let segmentLength = Math.floor(middle);
    let twentyFivePercentMiddle = getMiddle(segmentLength);
    let leftIndex = twentyFivePercentMiddle;
    let rightIndex = numbers.length - twentyFivePercentMiddle;
    let q1 = getQuartile(leftIndex, numbers);
    let q2 = getQuartile(middle, numbers);
    let q3 = getQuartile(rightIndex, numbers);
    return [q1, q2, q3];
    
}

function getMiddle(length) {
    return length / 2;
}

function getQuartile(index, numbers) {
    if ((index * 2) % 2 === 0) {
        return (numbers[index - 1] + numbers[index]) / 2
    } else {
        return numbers[Math.floor(index)];
    }
    
}

module.exports = quartiles;