const Gameboard = require('./gameboard');
const randomCoordinates = require('./randomCoordinates');

const Player = (boolean) => {
  const isAI = boolean;
  const board = Gameboard();

  const placeHit = (board, x, y) => {
    const checkHit = board.receiveAttack(x, y);
    return { x, y, checkHit };
  };

  const aiAttack = (board) => {
    const { x, y } = randomCoordinates();
    if (board.grid[x][y].hit === true) {
      aiAttack(board);
    }
    const hit = placeHit(board, x, y);
    return hit;
  };

  const attack = (board, x, y) => {
    let hitCoordinates = {};
    if (isAI === true) {
      hitCoordinates = aiAttack(board);
      return hitCoordinates;
    }
    hitCoordinates = placeHit(board, x, y);
    return hitCoordinates;
  };

  return {
    get board() {
      return board;
    },
    attack,
  };
};

module.exports = Player;
