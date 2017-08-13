let MedianTracker = require("./index");

describe("median tracker", () => {
	it("should track median", () => {
		//[1, 5, 9, 10, 3, 2, 4, 8, 15, 20, 13, 17]
		let medianTracker = new MedianTracker();
		medianTracker.addNumber(1);
		expect(medianTracker.currentMedian).toBe('1.0');
		medianTracker.addNumber(5);
		expect(medianTracker.currentMedian).toBe('3.0');
		medianTracker.addNumber(9);
		expect(medianTracker.currentMedian).toBe('5.0');
		
	});
});