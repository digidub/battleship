const Gameboard = () => {
  let grid = [];

  const buildGrid = () => {
    grid = new Array(10);
    for (let i = 0; i < grid.length; i += 1) {
      grid[i] = new Array(10);
      for (let j = 0; j < grid[i].length; j += 1) {
        grid[i][j] = `${i}${j}`;
      }
    }
  };

  return {
    get grid() {
      return grid;
    },
    buildGrid,
  };
};

module.exports = Gameboard;
