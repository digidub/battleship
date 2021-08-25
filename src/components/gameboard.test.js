const Gameboard = require('./gameboard');

describe('Gameboard', () => {
  describe('creates grid', () => {
    it('creates a 10x10 grid', () => {
      const grid = Gameboard();
      grid.buildGrid();
      expect(grid.grid.length).toEqual(10);
    });
  });
});
