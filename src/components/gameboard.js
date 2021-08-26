const Ship = require('./ship');

const Gameboard = () => {
  let grid = [];
  const shipNamesAndLengths = [
    { name: 'destroyer', length: 2 },
    { name: 'submarine', length: 3 },
    { name: 'cruiser', length: 3 },
    { name: 'battleship', length: 4 },
    { name: 'carrier', length: 5 },
  ];
  let ships = [];

  const buildGrid = () => {
    grid = new Array(10);
    grid.fill(null, 0);
    for (let i = 0; i < grid.length; i += 1) {
      grid[i] = new Array(10);
      grid[i].fill(null, 0);
    }
  };

  const createShips = () => {
    // shipNamesAndLengths.forEach((obj) => {
    //   const ship = Ship(obj.name, obj.length);
    //   ships.push(ship);
    // });
    ships = shipNamesAndLengths.map((obj) => Ship(obj.name, obj.length));
  };

  const placeShip = (ship, i, j) => {
    if (grid[i][j] !== null) return;
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

  // const receiveAttack = (i, j, ship) => {
  //   if (grid[i][j] !== null && grid[i][j] !== 'x') {
  //     let shipName = grid[i][j];
  //     window[shipName].hit();
  //   }
  //   grid[i][j] = 'x';
  // };

  return {
    get grid() {
      return grid;
    },
    get ships() {
      return ships;
    },
    buildGrid,
    createShips,
    placeShip,
    // receiveAttack,
  };
};

module.exports = Gameboard;
