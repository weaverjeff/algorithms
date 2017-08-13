let BinaryHeap = require("./binaryHeap");

class MinHeap extends BinaryHeap {
    shouldSwap(child, parent) {
        return (child < parent);
    }
}

module.exports = MinHeap;