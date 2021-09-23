import GameController from './gamecontroller';

describe('Game Control', () => {
  describe('initialises game correctly', () => {
    it('sets up both players grids', () => {
      expect(GameController.playerOne.board.grid.length).toEqual(10);
      expect(GameController.playerOne.board.grid[1].length).toEqual(10);
      expect(GameController.playerOne.board.grid[2].length).toEqual(10);
      expect(GameController.playerOne.board.grid[4].length).toEqual(10);
      expect(GameController.playerOne.board.grid[6].length).toEqual(10);
      expect(GameController.playerOne.board.grid[8].length).toEqual(10);
      expect(GameController.playerOne.board.grid[9].length).toEqual(10);
      expect(GameController.playerTwo.board.grid.length).toEqual(10);
      expect(GameController.playerTwo.board.grid[1].length).toEqual(10);
      expect(GameController.playerTwo.board.grid[2].length).toEqual(10);
      expect(GameController.playerTwo.board.grid[4].length).toEqual(10);
      expect(GameController.playerTwo.board.grid[6].length).toEqual(10);
      expect(GameController.playerTwo.board.grid[8].length).toEqual(10);
      expect(GameController.playerTwo.board.grid[9].length).toEqual(10);
    });
    it('creates both players ships', () => {
      expect(GameController.playerOne.board.ships[0].name).toEqual('destroyer');
      expect(GameController.playerOne.board.ships[1].name).toEqual('submarine');
      expect(GameController.playerOne.board.ships[2].name).toEqual('cruiser');
      expect(GameController.playerOne.board.ships[3].name).toEqual('battleship');
      expect(GameController.playerOne.board.ships[4].name).toEqual('carrier');
      expect(GameController.playerOne.board.ships[0].length).toEqual(2);
      expect(GameController.playerOne.board.ships[1].length).toEqual(3);
      expect(GameController.playerOne.board.ships[2].length).toEqual(3);
      expect(GameController.playerOne.board.ships[3].length).toEqual(4);
      expect(GameController.playerOne.board.ships[4].length).toEqual(5);
      expect(GameController.playerTwo.board.ships[0].name).toEqual('destroyer');
      expect(GameController.playerTwo.board.ships[1].name).toEqual('submarine');
      expect(GameController.playerTwo.board.ships[2].name).toEqual('cruiser');
      expect(GameController.playerTwo.board.ships[3].name).toEqual('battleship');
      expect(GameController.playerTwo.board.ships[4].name).toEqual('carrier');
      expect(GameController.playerTwo.board.ships[0].length).toEqual(2);
      expect(GameController.playerTwo.board.ships[1].length).toEqual(3);
      expect(GameController.playerTwo.board.ships[2].length).toEqual(3);
      expect(GameController.playerTwo.board.ships[3].length).toEqual(4);
      expect(GameController.playerTwo.board.ships[4].length).toEqual(5);
    });
  });
  describe('game flow', () => {
    it('changes turn on each attack', () => {});
  });
});
