let BinaryHeap = require("./binaryHeap");

class MaxHeap extends BinaryHeap {
    shouldSwap(child, parent) {
        return (child > parent);
    }
}

module.exports = MaxHeap;