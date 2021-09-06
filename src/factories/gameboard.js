const Ship = require('./ship');
const randomCoordinates = require('./randomCoordinates');

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

  const buildShips = () => {
    ships = shipNamesAndLengths.map((obj) => Ship(obj.name, obj.length));
  };

  const validateShipPlacement = (ship) => {
    let illegalPlacement = true;
    let coordinates = { x: 0, y: 0 };
    while (illegalPlacement) {
      coordinates = randomCoordinates();
      if (ship.horizontal === true) {
        coordinates.y = fitShipToGrid(ship.length, coordinates.y);
      } else {
        coordinates.x = fitShipToGrid(ship.length, coordinates.x);
      }
      illegalPlacement = checkForShipClash(ship.length, ship.horizontal, coordinates.x, coordinates.y, ship.name);
    }
    return coordinates;
  };

  const checkForShipClash = (shipLength, horizontal, startX, startY, shipName) => {
    if (horizontal) {
      for (let i = 0; i < shipLength; i += 1) {
        if (grid[startX][startY + i].ship) {
          return true;
        }
      }
      return false;
    }
    for (let i = 0; i < shipLength; i += 1) {
      if (grid[startX + i][startY].ship) {
        return true;
      }
    }
    return false;
  };

  const fitShipToGrid = (shipLength, startPosition) => {
    if (startPosition + shipLength > 9) {
      startPosition = 9 - shipLength;
      return startPosition;
    }
    return startPosition;
  };

  const randomShipPlacement = () => {
    ships.forEach((ship) => {
      ship.randomOrientation();
      const { x, y } = validateShipPlacement(ship);
      placeShip(ship, x, y);
    });
  };

  const placeHorizontal = (row, column, ship, grid) =>
    grid.map((r, rowIndex) =>
      r.map((c, columnIndex) =>
        rowIndex === row && columnIndex >= column && columnIndex < column + ship.length
          ? { ...column, ship: { name: ship.name, index: columnIndex - column } }
          : c
      )
    );

  const placeVertical = (row, column, ship, grid) =>
    grid.map((r, rowIndex) =>
      r.map((c, columnIndex) =>
        columnIndex === column && rowIndex >= row && rowIndex < row + ship.length
          ? { ...column, ship: { name: ship.name, index: rowIndex - row } }
          : c
      )
    );

  const placeShip = (ship, i, j) => {
    let newGrid = [];
    if (ship.horizontal) newGrid = placeHorizontal(i, j, ship, grid);
    else newGrid = placeVertical(i, j, ship, grid);
    grid = newGrid;
    return;
  };

  const findShipByName = (name) => ships.find((obj) => obj.name === name);

  const checkShipHit = (i, j) => {
    if (grid[i][j].ship !== false && grid[i][j].hit === true) return true;
  };

  const receiveAttack = (i, j) => {
    console.log('hi');
    if (grid[i][j].ship !== false && grid[i][j].hit === false) {
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
    console.log(grid);
    if (checkShipHit(i, j)) return true;
    return false;
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

  buildGrid();
  buildShips();

  return {
    get grid() {
      return grid;
    },
    get ships() {
      return ships;
    },
    buildGrid,
    buildShips,
    randomShipPlacement,
    placeShip,
    receiveAttack,
    checkAllShipsSunk,
  };
};

module.exports = Gameboard;
