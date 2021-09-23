import Gameboard from './gameboard';
import randomCoordinates from './randomCoordinates';

const Player = (boolean) => {
  const isAI = boolean;
  const board = Gameboard();
  if (isAI) board.randomShipPlacement();

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

export default Player;
