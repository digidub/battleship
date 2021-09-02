const Gameboard = require('./gameboard');
const Player = require('./player');

const GameController = (() => {
  const playerOne = Player();
  const playerTwo = Player(true);

  let playerOneTurn = true;

  // const changeTurn = () => {
  //     if (n )

  // };

  return {
    get playerOne() {
      return playerOne;
    },
    get playerTwo() {
      return playerTwo;
    },
  };
})();

module.exports = GameController;
