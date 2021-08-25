// const Ship = require('./ship');

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

  const placeShip = (ship, i, j) => {
    const gridCellsUsed = ship.length;
    if (ship.orientation === 'horizontal') {
      for (let x = 0; x < gridCellsUsed; x += 1) {
        grid[i][j + x] = ship.name;
      }
    } else {
      for (let x = 0; x < gridCellsUsed; x += 1) {
        grid[i + x][j] = ship.name;
      }
    }
  };

  return {
    get grid() {
      return grid;
    },
    buildGrid,
    placeShip,
  };
};

module.exports = Gameboard;
