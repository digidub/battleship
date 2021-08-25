const Gameboard = require('./gameboard');
const Ship = require('./ship');

describe('Gameboard', () => {
  describe('creates grid', () => {
    it('creates a 10x10 grid', () => {
      const game = Gameboard();
      game.buildGrid();
      expect(game.grid.length).toEqual(10);
      expect(game.grid[1].length).toEqual(10);
      expect(game.grid[2].length).toEqual(10);
      expect(game.grid[4].length).toEqual(10);
      expect(game.grid[6].length).toEqual(10);
      expect(game.grid[8].length).toEqual(10);
      expect(game.grid[9].length).toEqual(10);
    });
  });
  describe('ship placement', () => {
    it('places a ship in the first coordinates of the first row', () => {
      const game = Gameboard();
      const ship = Ship('small', 3);
      game.buildGrid();
      game.placeShip(ship, 0, 0);
      expect(game.grid[0]).toEqual(['small', 'small', 'small', '03', '04', '05', '06', '07', '08', '09']);
    });
    it('places a ship in the last coordinates of the first row', () => {
      const game = Gameboard();
      const ship = Ship('small', 2);
      game.buildGrid();
      game.placeShip(ship, 0, 8);
      expect(game.grid[0]).toEqual(['00', '01', '02', '03', '04', '05', '06', '07', 'small', 'small']);
    });
    it('places multiple horizontal ships', () => {
      const game = Gameboard();
      const shipOne = Ship('small', 2);
      const shipTwo = Ship('med', 3);
      const shipThree = Ship('large', 4);
      game.buildGrid();
      game.placeShip(shipOne, 0, 8);
      game.placeShip(shipTwo, 4, 0);
      game.placeShip(shipThree, 8, 4);
      expect(game.grid[0]).toEqual(['00', '01', '02', '03', '04', '05', '06', '07', 'small', 'small']);
      expect(game.grid[4]).toEqual(['med', 'med', 'med', '43', '44', '45', '46', '47', '48', '49']);
      expect(game.grid[8]).toEqual(['80', '81', '82', '83', 'large', 'large', 'large', 'large', '88', '89']);
    });
  });
});
