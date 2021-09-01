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
      expect(GameController.playerTwoBoard.grid.length).toEqual(10);
      expect(GameController.playerTwoBoard.grid[1].length).toEqual(10);
      expect(GameController.playerTwoBoard.grid[2].length).toEqual(10);
      expect(GameController.playerTwoBoard.grid[4].length).toEqual(10);
      expect(GameController.playerTwoBoard.grid[6].length).toEqual(10);
      expect(GameController.playerTwoBoard.grid[8].length).toEqual(10);
      expect(GameController.playerTwoBoard.grid[9].length).toEqual(10);
    });
    it('creates both players ships', () => {
      expect(GameController.playerOneBoard.ships[0].name).toEqual('destroyer');
      expect(GameController.playerOneBoard.ships[1].name).toEqual('submarine');
      expect(GameController.playerOneBoard.ships[2].name).toEqual('cruiser');
      expect(GameController.playerOneBoard.ships[3].name).toEqual('battleship');
      expect(GameController.playerOneBoard.ships[4].name).toEqual('carrier');
      expect(GameController.playerOneBoard.ships[0].length).toEqual(2);
      expect(GameController.playerOneBoard.ships[1].length).toEqual(3);
      expect(GameController.playerOneBoard.ships[2].length).toEqual(3);
      expect(GameController.playerOneBoard.ships[3].length).toEqual(4);
      expect(GameController.playerOneBoard.ships[4].length).toEqual(5);
      expect(GameController.playerTwoBoard.ships[0].name).toEqual('destroyer');
      expect(GameController.playerTwoBoard.ships[1].name).toEqual('submarine');
      expect(GameController.playerTwoBoard.ships[2].name).toEqual('cruiser');
      expect(GameController.playerTwoBoard.ships[3].name).toEqual('battleship');
      expect(GameController.playerTwoBoard.ships[4].name).toEqual('carrier');
      expect(GameController.playerTwoBoard.ships[0].length).toEqual(2);
      expect(GameController.playerTwoBoard.ships[1].length).toEqual(3);
      expect(GameController.playerTwoBoard.ships[2].length).toEqual(3);
      expect(GameController.playerTwoBoard.ships[3].length).toEqual(4);
      expect(GameController.playerTwoBoard.ships[4].length).toEqual(5);
    });
  });
  describe('game flow', () => {
    it('changes turn on each attack', () => {});
  });
});
