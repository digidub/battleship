import { useState, useReducer, useEffect } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import styled from 'styled-components';
import './App.css';
import GridContainer from './components/GridContainer';
import Header from './components/Header';
import PlacementGrid from './components/PlacementGrid';
import ShipPanel from './components/ShipPanel';
const gameController = require('./factories/gamecontroller');

const reducer = (ships, action) => {
  switch (action.type) {
    case 'placed ship':
      return ships.filter((ship) => ship.name !== action.name);
    case 'random':
      return {};
    default:
      throw new Error('oops');
  }
};

function App() {
  //board states
  const [playerOneGridState, setPlayerOneGridState] = useState(gameController.playerOne.board.grid);
  const [playerTwoGridState, setPlayerTwoGridState] = useState(gameController.playerTwo.board.grid);

  //state management for placing player's ships
  const [showShipPanel, setShowShipPanel] = useState(true);
  const [shipsToPlace, dispatch] = useReducer(reducer, gameController.playerOne.board.shipsToPlace);
  const [placingShip, setPlacingShip] = useState();
  const [isHovering, setIsHovering] = useState();

  //game state
  const [allShipsPlaced, setAllShipsPlaced] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameWinner, setGameWinner] = useState();

  useEffect(() => {
    if (shipsToPlace.length === 0) setAllShipsPlaced(true);
  }, [shipsToPlace]);

  const handleShipPickUp = (e) => {
    const selectedShip = shipsToPlace.filter((obj) => obj.name === e.target.parentNode.id);
    setPlacingShip((placingShip) => selectedShip[0]);
  };

  const handlePlaceShip = (e) => {
    if (!placingShip) return;
    if (e.target.id >= '00' && e.target.id <= '99') {
      const row = Number(e.target.id[0]);
      const column = Number(e.target.id[1]);
      let successfulPlacement = gameController.playerOne.board.placeUserShip(placingShip, row, column);
      if (successfulPlacement) {
        setPlayerOneGridState(gameController.playerOne.board.grid);
        dispatch({ type: 'placed ship', name: placingShip.name });
        setPlacingShip(null);
        setIsHovering(false);
      }
    }
  };

  const handleHover = (e) => {
    if (placingShip) {
      const coordinates = [];
      let cell = parseInt(e.target.id);

      if (placingShip.horizontal) {
        for (let i = 0; i < placingShip.length; i += 1) {
          const row = e.target.id[0];
          const rowLimit = parseInt(`${row}9`);
          if (cell + placingShip.length > rowLimit) cell = rowLimit - placingShip.length + 1;
          let column = cell + i;
          if (column < 10) column = '0' + column;
          coordinates.push(column.toString());
        }
      } else {
        for (let i = 0; i < placingShip.length; i += 1) {
          const column = e.target.id[1];
          const columnLimit = parseInt(`9${column}`);
          if (cell + placingShip.length * 10 > columnLimit) cell = columnLimit - placingShip.length * 10 + 10;
          let row = cell + i * 10;
          if (row < 10) row = '0' + row;
          coordinates.push(row.toString());
        }
      }
      setIsHovering((isHovering) => coordinates);
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    if (!placingShip) return;
    if (e.target.id >= '00' && e.target.id <= '99') {
      placingShip.rotate();
    }
  };

  const handleClick = (e) => {
    const x = Number(e.target.id[0]);
    const y = Number(e.target.id[1]);
    if (playerTwoGridState[x][y].hit) return; // check hit has not already been placed in cell
    let attack = gameController.playerOne.attack(gameController.playerTwo.board, x, y);
    setPlayerTwoGridState(gameController.playerTwo.board.grid);
    if (attack.checkHit) {
      checkforWinner();
      return;
    } else gameController.changeTurn();
    checkforWinner();
    setPlayerOneGridState(gameController.playerOne.board.grid);
  };

  const startGame = () => {
    setGameStarted(true);
    setAllShipsPlaced(false);
  };

  const checkforWinner = () => {
    let winner = gameController.winCondition();
    if (winner) {
      setGameOver(true);
      setGameWinner(`${winner} wins!`);
    }
  };

  const playerOneRandomPlacement = () => {
    gameController.playerOne.board.clearShipsFromBoard();
    gameController.playerOne.board.randomShipPlacement();
    setPlayerOneGridState(gameController.playerOne.board.grid);
    // dispatch({ type: 'random' });
    setAllShipsPlaced(true);
    setShowShipPanel(false);
    setIsHovering(false);
    setPlacingShip(null);
  };

  const handlePlayAgain = () => {
    setGameStarted(false);
    setGameOver(false);
    setPlayerOneGridState(gameController.playerOne.board.grid);
    setPlayerTwoGridState(gameController.playerTwo.board.grid);
    setShowShipPanel(true);
  };

  return (
    <div className='App'>
      <Header />
      {!gameStarted && (
        <Fragment>
          <button onClick={playerOneRandomPlacement}>Random Placement</button>
          <PlacementGrid
            grid={playerOneGridState}
            placingShip={placingShip}
            isHovering={isHovering}
            handleHover={handleHover}
            handleClick={handlePlaceShip}
            handleRightClick={handleRightClick}
          />
        </Fragment>
      )}
      {allShipsPlaced && <button onClick={startGame}>start</button>}
      {showShipPanel && <ShipPanel ships={shipsToPlace} handleClick={handleShipPickUp} />}
      {gameStarted && (
        <GridDisplay>
          <GridContainer clickFunction={handleClick} grid={playerOneGridState} />
          <GridContainer clickFunction={handleClick} grid={playerTwoGridState} ai={true} />
        </GridDisplay>
      )}
      {gameOver && (
        <div>
          <p>{gameWinner}</p>
          <button onClick={handlePlayAgain}>Play again</button>
        </div>
      )}
    </div>
  );
}

export default App;

const GridDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
