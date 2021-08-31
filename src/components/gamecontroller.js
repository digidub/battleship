const Gameboard = require('./gameboard');
const Player = require('./player');

const GameController = (() => {
  const initialiseGame = () => {
    const playerOne = Player();
    const playerOneBoard = Gameboard();
    playerOneBoard.buildGrid();
    const playerTwoBoard = Gameboard();
    playerTwoBoard.buildGrid();
    playerOneBoard.createShips();
    playerTwoBoard.createShips();
  };

  return {
    initialiseGame,
  };
})();

module.exports = GameController;
