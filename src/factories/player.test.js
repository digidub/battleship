const Player = require('./player');
const Gameboard = require('./gameboard');

describe('Player tests', () => {
  describe('player interaction', () => {
    it('players can hit each others boards', () => {
      const playerTwo = Player(false);
      const playerOneBoard = Gameboard();
      playerOneBoard.buildGrid();
      const playerTwoBoard = Gameboard();
      playerTwoBoard.buildGrid();
      playerOneBoard.buildShips();
      playerTwoBoard.buildShips();
      playerOneBoard.placeShip(playerOneBoard.ships[0], 0, 0);
      playerTwo.attack(playerOneBoard, 0, 0);
      expect(playerOneBoard.grid[0][0]).toStrictEqual({
        hit: true,
        ship: { name: 'destroyer', startPos: '00' },
      });
    });
  });
  describe('artificial intelligence', () => {
    it('places a random hit on the board', () => {
      const playerTwo = Player(true);
      const playerOneBoard = Gameboard();
      playerOneBoard.buildGrid();
      playerOneBoard.buildShips();
      const { x, y } = playerTwo.attack(playerOneBoard, 0, 0);
      expect(playerOneBoard.grid[x][y].hit).toStrictEqual(true);
    });
  });
});
