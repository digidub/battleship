const Player = require('./player');

const GameController = (() => {
  const playerOne = Player();
  const playerTwo = Player(true);
  let gameOver = false;
  let winner = null;

  let playerOneTurn = true;

  const changeTurn = () => {
    playerOneTurn = !playerOneTurn;
    let hit = true;
    if (!playerOneTurn) {
      while (hit) {
        let didHit = playerTwo.attack(playerOne.board);
        if (!didHit.checkHit) hit = false;
        if (winCondition()) hit = false; //simulate move to next round
      }
      changeTurn();
    }
  };

  const restartGame = () => {
    playerOne.board.clearShipsFromBoard();
    playerTwo.board.clearShipsFromBoard();
    playerTwo.board.randomShipPlacement();
  };

  const winCondition = () => {
    if (playerOneTurn) {
      if (playerTwo.board.checkAllShipsSunk()) {
        gameOver = true;
        winner = 'player one';
        restartGame();
        return winner;
      }
    } else {
      if (playerOne.board.checkAllShipsSunk()) {
        gameOver = true;
        winner = 'player two';
        restartGame();
        return winner;
      }
    }
    return false;
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
