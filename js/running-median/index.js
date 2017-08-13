let MinHeap = require("../data-structures/minHeap");
let MaxHeap = require("../data-structures/maxHeap");


class MedianTracker {
	constructor(numbers = []) {
		this.minHeap = new MinHeap();
		this.maxHeap = new MaxHeap();
		this.currentMedian = 0;
		this.numbers = numbers;
		
		console.log(this.numbers);
		for(let i = 0; i < this.numbers.length; i++) {
			let number = this.numbers[i]
			this.addNumber(number);
		}
	}

	addNumber(number) {
		this.log("------------------------------------");
		this.log(`adding ${number}`);
		let heap = this.pickHeap(this.minHeap, this.maxHeap, number, this.currentMedian);
		heap.add(number);
		this.rebalanceHeaps(this.minHeap, this.maxHeap);
		this.log(this.minHeap, this.maxHeap);
		this.currentMedian = this.calculateMedian(this.minHeap, this.maxHeap).toFixed(1);
		console.log(this.currentMedian);
	}
	
	log(...args) {
		const log = true;
		if (log) {
			console.log(...args);
		}
	};
	calculateMedian(minHeap, maxHeap) {
		/*
		If the heaps contain equal amount of elements;
			median = (root of maxHeap + root of minHeap)/2
		Else
			median = root of the heap with more elements
		*/
		
		if (minHeap.values.length === maxHeap.values.length) {
			return (maxHeap.values[0] + minHeap.values[0]) / 2
		}
		
		return minHeap.values.length > maxHeap.values.length ? minHeap.values[0] : maxHeap.values[0];
	
	}
	
	pickHeap(minHeap, maxHeap, number, currentMedian) {
		
		//  Step 1: Add next item to one of the heaps
		//
		//       if next item is smaller than maxHeap root add it to maxHeap,
		//       else add it to minHeap
	
		if (minHeap.values.length === 0) {
			this.log("minheap size 0, selecting minHeap");
			return minHeap;
		} 
		
		if (number > currentMedian) {
			this.log(`number greater than current median. median (${currentMedian}), picking minHeap.`);
			return minHeap;
		} else {
			this.log(`number less than current median (${currentMedian}), picking maxHeap.`);
			return maxHeap;
		}
	}
	
	rebalanceHeaps(minHeap, maxHeap) {
		
		// Step 2: Balance the heaps (after this step heaps will be either balanced or one of them will contain 1 more item)
		//
		//      if number of elements in one of the heaps is greater than the other by
		//      more than 1, remove the root element from the one containing more elements and add to the other one
		
		log(`rebalancing.  minHeap.size=${minHeap.values.length}, maxHeap.size=${maxHeap.values.length}`);
		if (Math.abs(minHeap.values.length - maxHeap.values.length) <= 1) {
			this.log(`heaps within 1, no rebalance needed.`);
			return;
		}
		
		if (minHeap.values.length > maxHeap.values.length) {
			//remove from minheap and move to maxheap
			this.log("minHeap bigger than maxHeap, adding to maxHeap, and deleting minHeap root")
			maxHeap.add(minHeap.values[0]);
			minHeap.deleteRoot();
			
		} else {
			//remove from maxheap and move to minheap
			this.log("minHeap smaller than maxHeap, adding to minHeap, and deleting maxHeap root")
			minHeap.add(maxHeap.values[0]);
			maxHeap.deleteRoot();
		}
	}
}

module.exports = MedianTracker;