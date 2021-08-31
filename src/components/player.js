const player = () => {
  const attack = (board, x, y) => {
    board.receiveAttack(x, y);
  };

  const randomAttackCoordinates = () => Math.floor(Math.random() * 10);

  const aiAttack = (board) => {
    const x = randomAttackCoordinates();
    const y = randomAttackCoordinates();
    if (board.grid[x][y].hit === true) {
      console.log(`hit already placed at ${x}${y}`);
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

module.exports = player;
