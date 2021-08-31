const Player = () => {
  const attack = (board, x, y) => {
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
    attack(board, x, y);
    return { x, y };
  };

  return {
    attack,
    aiAttack,
  };
};

module.exports = Player;
