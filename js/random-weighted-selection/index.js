
class AdPicker {
  constructor(ads) {
    this.ads = ads;
    this.cdf = [];
    this.setCumulativeDistribution();
  }
  
  setCumulativeDistribution() {
    this.cdf[0] = this.ads[0].weight;
    for(let i = 1; i < this.ads.length; i++) {
      this.cdf.push(this.ads[i].weight + this.cdf[i - 1]);
    }
    // console.log(this.cdf);
  }
  
  pick() {
    const random = this.getRandomArbitrary(0, 1);
   //console.log("random", random);
    if (random <= this.cdf[0]) {
      return this.ads[0];
    }
    for(let i = 1; i < this.cdf.length; i++) {
      if (random > this.cdf[i - 1] && random <= this.cdf[i]) {
        return this.ads[i];
      }
    }
    return this.ads[0]; //todo:  why default to this??
  }
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
}

module.exports =AdPicker;