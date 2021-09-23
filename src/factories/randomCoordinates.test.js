import randomCoordinates from './randomCoordinates';

describe('Random coordinates', () => {
  describe('produces correct numbers', () => {
    it('produces numbers between 0 and 9 inclusive', () => {
      const { x, y } = randomCoordinates();
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThanOrEqual(9);
      expect(y).toBeGreaterThanOrEqual(0);
      expect(y).toBeLessThanOrEqual(9);
    });
  });
});
