const player = () => {
  const attack = (board, x, y) => {
    board.receiveAttack(x, y);
  };

  return {
    attack,
  };
};

module.exports = player;
