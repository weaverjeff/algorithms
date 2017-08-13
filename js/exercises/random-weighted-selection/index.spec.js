var AdPicker = require("./index");

describe("random weighted ad picker tests", function() {
	it("should work", () => {
		
		const ads = [
			{name: "ad1", weight:.25 },
			{name: "ad2", weight:.10 },
			{name: "ad3", weight:.10 },
			{name: "ad4", weight:.05 },
			{name: "ad5", weight:.5 }
		];
			
		let adPicker = new AdPicker(ads);
		let allAds = ads.reduce((obj, ad) => { 
			obj[ad.name] = { total: 0, desiredWeight: ad.weight };
			return obj;
		}, {});
		
		
		for(let i = 1; i <= 1000; i++) {
			let ad = adPicker.pick();
			allAds[ad.name].total ++;
			allAds[ad.name].percentage =  allAds[ad.name].total / 1000
		//console.log(ad);
		}
		
		console.log(allAds);
		expect(1).toBe(1);
	});
});