const Player = require('./player');
const Gameboard = require('./gameboard');

describe('Player tests', () => {
  describe('creates grid', () => {
    it('creates a 10x10 grid', () => {
      const playerOne = Player();
      const playerTwo = Player();
      const playerOneBoard = Gameboard();
      playerOneBoard.buildGrid();
      const playerTwoBoard = Gameboard();
      playerTwoBoard.buildGrid();
      playerOneBoard.createShips();
      playerTwoBoard.createShips();
      playerOneBoard.placeShip(playerOneBoard.ships[0], 0, 0);
      playerTwo.attack(playerOneBoard, 0, 0);
      expect(playerOneBoard.grid[0][0]).toStrictEqual({ hit: true, ship: { name: 'destroyer', startPos: '00' } });
    });
  });
});
