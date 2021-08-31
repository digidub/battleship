const Player = (boolean) => {
  const isAI = boolean;

  const placeHit = (board, x, y) => {
    const hit = board.receiveAttack(x, y);
    if (hit === true) return true;
    return false;
  };

  const randomAttackCoordinates = () => Math.floor(Math.random() * 10);

  const aiAttack = (board) => {
    const x = randomAttackCoordinates();
    const y = randomAttackCoordinates();
    if (board.grid[x][y].hit === true) {
      aiAttack(board);
    }
    placeHit(board, x, y);
    return { x, y };
  };

  const attack = (board, x, y) => {
    if (isAI === true) aiAttack(board);
    else placeHit(board, x, y);
  };

  return {
    attack,
    aiAttack,
  };
};

module.exports = Player;
