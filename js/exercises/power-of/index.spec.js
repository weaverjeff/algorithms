let powerOf = require("./index");
describe('power of', () => {
    it('should return true for a power of 1', () => {
        const result = powerOf(1, 1);
        expect(result).toBe(true);
    });

    it('should return true for a power of 2', () => {
        const result = powerOf(2, 128);
        expect(result).toBe(true);
    });

    
    it('should return true for a power of 3', () => {
        const result = powerOf(3, 1594323);
        expect(result).toBe(true);
    });

    it('should return false when power cant be found', () => {
        const result = powerOf(3, 100);
        expect(result).toBe(false);
    });
});