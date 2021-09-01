const Gameboard = require('./components/gameboard');
const Player = require('./components/player');
const GameController = require('./components/gamecontroller');

const playerTwo = Player(true);
const playerOneBoard = Gameboard();
playerOneBoard.buildGrid();
playerOneBoard.createShips();
const { x, y, hit } = playerTwo.attack(playerOneBoard, 0, 0);

// playerOneBoard.placeShip(playerOneBoard.ships[0], 0, 0);
// for (let i = 0; i < 10; i += 1) {
//   playerOne.aiAttack(playerTwoBoard);
// }
// console.log(playerTwoBoard.grid);
