const GameController = require('./gamecontroller');

describe('Game Control', () => {
  describe('initialises game correctly', () => {
    it('sets up both players grids', () => {
      expect(GameController.playerOneBoard.grid.length).toEqual(10);
      expect(GameController.playerOneBoard.grid[1].length).toEqual(10);
      expect(GameController.playerOneBoard.grid[2].length).toEqual(10);
      expect(GameController.playerOneBoard.grid[4].length).toEqual(10);
      expect(GameController.playerOneBoard.grid[6].length).toEqual(10);
      expect(GameController.playerOneBoard.grid[8].length).toEqual(10);
      expect(GameController.playerOneBoard.grid[9].length).toEqual(10);
    });
  });
  //   describe('artificial intelligence', () => {
  //     it('places a random hit on the board', () => {
  //       const playerTwo = Player();
  //       const playerOneBoard = Gameboard();
  //       playerOneBoard.buildGrid();
  //       const playerTwoBoard = Gameboard();
  //       playerTwoBoard.buildGrid();
  //       playerOneBoard.createShips();
  //       playerTwoBoard.createShips();
  //       playerOneBoard.placeShip(playerOneBoard.ships[0], 0, 0);
  //       const { x, y } = playerTwo.aiAttack(playerOneBoard, 0, 0);
  //       expect(playerOneBoard.grid[x][y].hit).toStrictEqual(true);
  //     });
  //   });
});
