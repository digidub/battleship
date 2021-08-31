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
    ships = shipNamesAndLengths.map((obj) => Ship(obj.name, obj.length));
  };

  const placeShip = (ship, i, j) => {
    if (grid[i][j].ship !== false) return;
    const startPosX = i;
    const startPosY = j;
    const endPosX = startPosX + ship.length;
    const endPosY = startPosY + ship.length;
    const startPos = `${i}${j}`;
    if (ship.orientation === 'horizontal') {
      const newGrid = grid.map((row, indexX) =>
        row.map((element, indexY) => {
          if (indexX === i && indexY < endPosY && indexY >= startPosY) {
            return {
              ...element,
              ship: {
                name: ship.name,
                startPos,
              },
            };
          }
          return element;
        })
      );
      grid = newGrid;
    } else {
      const newGrid = grid.map((row, indexX) =>
        row.map((element, indexY) => {
          if (indexY === j && indexX < endPosX && indexX >= startPosX) {
            return {
              ...element,
              ship: {
                name: ship.name,
                startPos,
              },
            };
          }
          return element;
        })
      );
      grid = newGrid;
    }
    return grid;
  };

  const findShipByName = (name) => ships.find((obj) => obj.name === name);

  const receiveAttack = (i, j) => {
    if (grid[i][j] !== null && grid[i][j] !== 'x') {
      const shipObj = grid[i][j];
      const hitShip = findShipByName(shipObj.name);
      hitShip.hit(shipObj.index);
    }
    grid[i][j] = 'x';
  };

  const isShip = (ship) => {
    if (ship?.name) return true;
    return false;
  };

  const checkAllShipsSunk = () => {
    if (grid.filter(isShip).length < 1) return true;
    return false;
  };

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
    receiveAttack,
    checkAllShipsSunk,
  };
};

module.exports = Gameboard;
