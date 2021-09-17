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
  let shipsToPlace = [];

  const buildGrid = () => {
    const gridObj = { ship: false, hit: false };
    grid = new Array(10);
    grid.fill(gridObj, 0);
    for (let i = 0; i < grid.length; i += 1) {
      grid[i] = new Array(10);
      grid[i].fill(gridObj, 0);
    }
  };

  const buildShips = () => shipNamesAndLengths.map((obj) => Ship(obj.name, obj.length));

  const clearShipsFromBoard = () => buildGrid();

  const validateShipPlacement = (ship, random = false, row, column) => {
    if (random) {
      let illegalPlacement = true;
      let coordinates = { x: 0, y: 0 };
      while (illegalPlacement) {
        coordinates = randomCoordinates();
        if (ship.horizontal === true) {
          coordinates.y = fitShipToGrid(ship.length, coordinates.y);
        } else {
          coordinates.x = fitShipToGrid(ship.length, coordinates.x);
        }
        illegalPlacement = checkForShipClash(ship.length, ship.horizontal, coordinates.x, coordinates.y);
      }
      return coordinates;
    }
    // validation for user selected placement
    let illegalPlacement = true;
    let coordinates = { row, column };
    if (ship.horizontal === true) {
      coordinates.column = fitShipToGrid(ship.length, coordinates.column);
    } else coordinates.row = fitShipToGrid(ship.length, coordinates.row);
    illegalPlacement = checkForShipClash(ship.length, ship.horizontal, coordinates.row, coordinates.column);
    if (illegalPlacement) return;
    return coordinates;
  };

  const checkForShipClash = (shipLength, horizontal, startX, startY) => {
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
      startPosition = 9 - shipLength + 1;
      return startPosition;
    }
    return startPosition;
  };

  const randomShipPlacement = () => {
    let random = true;
    ships.forEach((ship) => {
      ship.randomOrientation();
      const { x, y } = validateShipPlacement(ship, random);
      placeShip(ship, x, y);
    });
  };

  const placeHorizontal = (row, column, ship) =>
    grid.map((r, rIndex) =>
      r.map((c, cIndex) =>
        rIndex === row && cIndex >= column && cIndex < column + ship.length ? { ...c, ship: { name: ship.name, index: cIndex - column } } : c
      )
    );

  const placeVertical = (row, column, ship) =>
    grid.map((r, rIndex) =>
      r.map((c, cIndex) =>
        cIndex === column && rIndex >= row && rIndex < row + ship.length ? { ...c, ship: { name: ship.name, index: rIndex - row } } : c
      )
    );

  const placeShip = (ship, row, column) => {
    let newGrid = [];
    if (ship.horizontal) newGrid = placeHorizontal(row, column, ship);
    else newGrid = placeVertical(row, column, ship);
    grid = newGrid;
    return;
  };

  const placeUserShip = (ship, row, column) => {
    let newGrid = [];
    let coordinates = validateShipPlacement(ship, false, row, column);
    if (!coordinates) return false;
    if (ship.horizontal) newGrid = placeHorizontal(coordinates.row, coordinates.column, ship);
    else newGrid = placeVertical(coordinates.row, coordinates.column, ship);
    grid = newGrid;
    return true;
  };

  const findShipByName = (name) => ships.find((obj) => obj.name === name);

  const checkShipHit = (i, j) => {
    if (grid[i][j].ship !== false && grid[i][j].hit === true) return true;
  };

  const receiveAttack = (i, j) => {
    if (grid[i][j].hit) return;
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
  ships = buildShips(ships);
  shipsToPlace = buildShips(shipsToPlace);

  return {
    shipNamesAndLengths,
    get grid() {
      return grid;
    },
    get ships() {
      return ships;
    },
    get shipsToPlace() {
      return shipsToPlace;
    },
    buildGrid,
    buildShips,
    clearShipsFromBoard,
    randomShipPlacement,
    placeShip,
    placeUserShip,
    receiveAttack,
    checkAllShipsSunk,
  };
};

module.exports = Gameboard;
