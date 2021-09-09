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
      }
      changeTurn();
    }
  };

  const winCondition = (player) => {
    if (player.board.grid.checkAllShipsSunk) return true;
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
  };
})();

module.exports = GameController;
