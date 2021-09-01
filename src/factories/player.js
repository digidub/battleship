const Player = (boolean) => {
  const isAI = boolean;

  const placeHit = (board, x, y) => {
    const checkHit = board.receiveAttack(x, y);
    return { x, y, checkHit };
  };

  const randomAttackCoordinates = () => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return { x, y };
  };

  const aiAttack = (board) => {
    const { x, y } = randomAttackCoordinates();
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
    attack,
  };
};

module.exports = Player;
