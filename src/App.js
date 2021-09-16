import { useState, useReducer } from 'react';
import styled from 'styled-components';
import './App.css';
import GridContainer from './components/GridContainer';
import PlacementGrid from './components/PlacementGrid';
import ShipPanel from './components/ShipPanel';
const gameController = require('./factories/gamecontroller');

const reducer = (ships, action) => {
  console.log(ships);
  console.log(action);
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

  const ships = gameController;

  //placing ship states
  const [shipsToPlace, dispatch] = useReducer(reducer, JSON.parse(JSON.stringify(gameController.playerOne.board.ships)));
  const [placingShip, setPlacingShip] = useState();
  const [isHovering, setIsHovering] = useState();

  const [shipCoords, setShipCoords] = useState();

  const handleShipPickUp = (e) => {
    const selectedShip = shipsToPlace.filter((obj) => obj.name === e.target.parentNode.id);
    setPlacingShip((placingShip) => selectedShip[0]);
  };

  const handlePlaceShip = (e) => {
    if (!placingShip) return;
    if (e.target.id >= '00' && e.target.id <= '99') {
      console.log(isHovering);
    }
    const row = Number(e.target.id[0]);
    const column = Number(e.target.id[1]);
    let successfulPlacement = gameController.playerOne.board.placeUserShip(placingShip, row, column);
    console.log(successfulPlacement);
    if (successfulPlacement) {
      setPlayerOneGridState(gameController.playerOne.board.grid);
      dispatch({ type: 'remove', name: placingShip.name });
      setPlacingShip(null);
      console.log(shipsToPlace);
    }
  };

  const handleHover = (e) => {
    if (placingShip) {
      const ship = placingShip;
      const coordinates = [];
      for (let i = 0; i < ship.length; i += 1) {
        const row = e.target.id[0];
        const rowLimit = parseInt(`${row}9`);
        let cell = parseInt(e.target.id);
        if (cell + ship.length > rowLimit) cell = rowLimit - ship.length + 1;
        let column = cell + i;
        if (column < 10) column = '0' + column;
        coordinates.push(column.toString());
      }
      setIsHovering((isHovering) => coordinates);
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

  return (
    <div className='App'>
      <GridDisplay>
        <PlacementGrid
          grid={playerOneGridState}
          placingShip={placingShip}
          isHovering={isHovering}
          handleHover={handleHover}
          handleClick={handlePlaceShip}
        />
        <ShipPanel ships={shipsToPlace} handleClick={handleShipPickUp} />
        <GridContainer clickFunction={handleClick} grid={playerOneGridState} />
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
