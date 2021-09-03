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

  const placeShip = (ship, i, j) => {
    if (grid[i][j].ship !== false) return;
    if (i > 9) return;
    if (j > 9) return;
    const startPosX = i;
    const startPosY = j;
    const endPosX = startPosX + ship.length;
    const endPosY = startPosY + ship.length;
    const startPos = `${i}${j}`;
    if (ship.horizontal === true) {
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

  const checkShipHit = (i, j) => {
    if (grid[i][j].ship !== false && grid[i][j].hit === true) return true;
  };

  const receiveAttack = (i, j) => {
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
