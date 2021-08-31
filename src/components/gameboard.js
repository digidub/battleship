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
    const gridObj = { ship: false, hit: false };
    grid = new Array(10);
    grid.fill(gridObj, 0);
    for (let i = 0; i < grid.length; i += 1) {
      grid[i] = new Array(10);
      grid[i].fill(gridObj, 0);
    }
  };

  const createShips = () => {
    ships = shipNamesAndLengths.map((obj) => Ship(obj.name, obj.length));
  };

  const placeShip = (ship, i, j) => {
    if (grid[i][j].ship !== false) return;
    if (i > 10) return;
    if (j > 10) return;
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
    if (grid[i][j].ship !== false && grid[i][j].hit !== false) {
      const shipObj = grid[i][j].ship;
      const hitShip = findShipByName(shipObj.name);
      hitShip.hit(shipObj.index);
    }
    const newGrid = grid.map((row, indexX) =>
      row.map((element, indexY) => {
        if (indexX === i && indexY === j) {
          return {
            ...element,
            hit: true,
          };
        }
        return element;
      })
    );
    grid = newGrid;
  };

  const checkAllShipsSunk = () => {
    for (let i = 0; i < grid.length; i += 1) {
      for (let j = 0; j < grid.length; j += 1) {
        if (grid[i][j].ship !== false && grid[i][j].hit !== true) {
          return false;
        }
      }
    }
    return true;
  };

  // grid.every((row) => row.every((cell) => cell.ship !== false && cell.hit === true));

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
