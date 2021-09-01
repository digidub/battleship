const Gameboard = require('./gameboard');
const Player = require('./player');

const GameController = (() => {
  const playerOne = Player();
  const playerTwo = Player();

  const playerOneBoard = Gameboard();
  const playerTwoBoard = Gameboard();

  playerOneBoard.buildGrid();
  playerTwoBoard.buildGrid();

  playerOneBoard.createShips();
  playerTwoBoard.createShips();

  let playerOneTurn = true;

  // const changeTurn = (player) => {
  //     if (n )

  // };

  return {
    get playerOne() {
      return playerOne;
    },
    get playerTwo() {
      return playerTwo;
    },
    get playerOneBoard() {
      return playerOneBoard;
    },
    get playerTwoBoard() {
      return playerTwoBoard;
    },
  };
})();

module.exports = GameController;
