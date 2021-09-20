const Player = require('./player');

const GameController = (() => {
  const playerOne = Player();
  const playerTwo = Player(true);
  let gameOver = false;

  let playerOneTurn = true;

  const changeTurn = () => {
    playerOneTurn = !playerOneTurn;
    let hit = true;
    if (!playerOneTurn) {
      while (hit) {
        let didHit = playerTwo.attack(playerOne.board);
        if (!didHit.checkHit) hit = false;
        winCondition();
      }
      changeTurn();
    }
  };

  const winCondition = () => {
    if (playerOneTurn) {
      if (playerTwo.board.checkAllShipsSunk()) {
        console.log('Congrats! You Win!');
      }
    } else {
      if (playerOne.board.checkAllShipsSunk()) {
        console.log('You Lose!');
      }
    }
  };

  return {
    get playerOne() {
      return playerOne;
    },
    get playerTwo() {
      return playerTwo;
    },
    changeTurn,
    winCondition,
  };
})();

module.exports = GameController;
