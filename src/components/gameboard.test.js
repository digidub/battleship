const Gameboard = require('./gameboard');

describe('Gameboard', () => {
  describe('creates grid', () => {
    it('creates a 10x10 grid', () => {
      const grid = Gameboard();
      grid.buildGrid();
      expect(grid.grid.length).toEqual(10);
      expect(grid.grid[1].length).toEqual(10);
      expect(grid.grid[2].length).toEqual(10);
      expect(grid.grid[4].length).toEqual(10);
      expect(grid.grid[6].length).toEqual(10);
      expect(grid.grid[8].length).toEqual(10);
      expect(grid.grid[9].length).toEqual(10);
    });
  });
});
