import { useState, useReducer, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import GridContainer from './components/GridContainer';
import PlacementGrid from './components/PlacementGrid';
import ShipPanel from './components/ShipPanel';
const gameController = require('./factories/gamecontroller');

const reducer = (ships, action) => {
  switch (action.type) {
    case 'remove':
      return ships.filter((ship) => ship.name !== action.name);
    default:
      throw new Error('oops');
  }
};

function App() {
  //board states
  const [playerOneGridState, setPlayerOneGridState] = useState(gameController.playerOne.board.grid);
  const [playerTwoGridState, setPlayerTwoGridState] = useState(gameController.playerTwo.board.grid);

  //placing ship states
  const [shipsToPlace, dispatch] = useReducer(reducer, gameController.playerOne.board.shipsToPlace);
  const [placingShip, setPlacingShip] = useState();
  const [isHovering, setIsHovering] = useState();

  //game state
  const [allShipsPlaced, setAllShipsPlaced] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const [shipCoords, setShipCoords] = useState();

  useEffect(() => {
    if (shipsToPlace.length === 0) setAllShipsPlaced(true);
  }, [shipsToPlace]);

  const handleShipPickUp = (e) => {
    const selectedShip = shipsToPlace.filter((obj) => obj.name === e.target.parentNode.id);
    setPlacingShip((placingShip) => selectedShip[0]);
  };

  const handlePlaceShip = (e) => {
    console.log(e);
    if (!placingShip) return;
    if (e.target.id >= '00' && e.target.id <= '99') {
      const row = Number(e.target.id[0]);
      const column = Number(e.target.id[1]);
      let successfulPlacement = gameController.playerOne.board.placeUserShip(placingShip, row, column);
      if (successfulPlacement) {
        setPlayerOneGridState(gameController.playerOne.board.grid);
        dispatch({ type: 'remove', name: placingShip.name });
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
      console.log(placingShip);
      placingShip.rotate();
    }
  };

  const hitLogic = (x, y) => {
    const board = gameController.playerOne.attack(gameController.playerTwo.board, x, y);
    if (board.checkHit) return true;
    return false;
  };

  const handleClick = (e) => {
    const x = Number(e.target.id[0]);
    const y = Number(e.target.id[1]);
    if (playerTwoGridState[x][y].hit) return;
    let checkHit = hitLogic(x, y);
    setPlayerTwoGridState(gameController.playerTwo.board.grid);
    if (checkHit) return;
    else gameController.changeTurn();
    setPlayerOneGridState(gameController.playerOne.board.grid);
  };

  const startGame = () => {
    setGameStarted(true);
    setAllShipsPlaced(false);
  };

  return (
    <div className='App'>
      <GridDisplay>
        {!gameStarted && (
          <PlacementGrid
            grid={playerOneGridState}
            placingShip={placingShip}
            isHovering={isHovering}
            handleHover={handleHover}
            handleClick={handlePlaceShip}
            handleRightClick={handleRightClick}
          />
        )}
        {allShipsPlaced && <button onClick={startGame}>start</button>}
        <ShipPanel ships={shipsToPlace} handleClick={handleShipPickUp} />
        {gameStarted && <GridContainer clickFunction={handleClick} grid={playerOneGridState} />}
        <GridContainer clickFunction={handleClick} grid={playerTwoGridState} />
      </GridDisplay>
    </div>
  );
}

export default App;

const GridDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
