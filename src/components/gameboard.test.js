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
  describe('ship creation', () => {
    it('creates ships with correct name and length', () => {
      const game = Gameboard();
      game.createShips();
      expect(game.ships[0].name).toEqual('destroyer');
      expect(game.ships[1].name).toEqual('submarine');
      expect(game.ships[2].name).toEqual('cruiser');
      expect(game.ships[3].name).toEqual('battleship');
      expect(game.ships[4].name).toEqual('carrier');
      expect(game.ships[0].length).toEqual(2);
      expect(game.ships[1].length).toEqual(3);
      expect(game.ships[2].length).toEqual(3);
      expect(game.ships[3].length).toEqual(4);
      expect(game.ships[4].length).toEqual(5);
    });
  });
  describe('ship placement', () => {
    it('places a ship in the first coordinates of the first row', () => {
      const game = Gameboard();
      const ship = Ship('small', 3);
      game.buildGrid();
      game.placeShip(ship, 0, 0);
      expect(game.grid[0]).toEqual(['small', 'small', 'small', null, null, null, null, null, null, null]);
    });
    it('places a ship in the last coordinates of the first row', () => {
      const game = Gameboard();
      const ship = Ship('small', 2);
      game.buildGrid();
      game.placeShip(ship, 0, 8);
      expect(game.grid[0]).toEqual([null, null, null, null, null, null, null, null, 'small', 'small']);
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
      expect(game.grid[0]).toEqual([null, null, null, null, null, null, null, null, 'small', 'small']);
      expect(game.grid[4]).toEqual(['med', 'med', 'med', null, null, null, null, null, null, null]);
      expect(game.grid[8]).toEqual([null, null, null, null, 'large', 'large', 'large', 'large', null, null]);
    });
    it('places a ship vertically in the first coordinates of the first column', () => {
      const game = Gameboard();
      const ship = Ship('med', 3);
      ship.switchOrientation();
      game.buildGrid();
      game.placeShip(ship, 0, 0);
      expect(game.grid[0]).toEqual(['med', null, null, null, null, null, null, null, null, null]);
      expect(game.grid[1]).toEqual(['med', null, null, null, null, null, null, null, null, null]);
      expect(game.grid[2]).toEqual(['med', null, null, null, null, null, null, null, null, null]);
    });
    it('prevents a ship being placed over another ship', () => {
      const game = Gameboard();
      const shipOne = Ship('small', 2);
      const shipTwo = Ship('med', 3);
      shipOne.switchOrientation();
      game.buildGrid();
      game.placeShip(shipOne, 0, 0);
      game.placeShip(shipTwo, 1, 0);
      expect(game.grid[0]).toEqual(['small', null, null, null, null, null, null, null, null, null]);
      expect(game.grid[1]).toEqual(['small', null, null, null, null, null, null, null, null, null]);
    });
    it('marks a hit on the grid', () => {
      const game = Gameboard();
      game.buildGrid();
      game.receiveAttack(0, 4);
      expect(game.grid[0]).toEqual([null, null, null, null, 'x', null, null, null, null, null]);
    });
    // it('marks a hit on a ship', () => {
    //   const game = Gameboard();
    //   game.buildGrid();
    //   const small = Ship('small', 2);
    //   game.placeShip(small, 3, 0);
    //   expect(game.grid[0]).toEqual([null, null, null, 'small', 'small', null, null, null, null, null]);
    //   game.receiveAttack(0, 4, shipOne);
    //   expect(game.grid[0]).toEqual([null, null, null, 'small', 'x', null, null, null, null, null]);
    // });
  });
});
