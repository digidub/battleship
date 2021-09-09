import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import GridContainer from './components/GridContainer';
const gameController = require('./factories/gamecontroller');

function App() {
  const [playerOneGridState, setPlayerOneGridState] = useState(gameController.playerOne.board.grid);
  const [playerTwoGridState, setPlayerTwoGridState] = useState(gameController.playerTwo.board.grid);

  const hitLogic = (x, y) => {
    const board = gameController.playerOne.attack(gameController.playerTwo.board, x, y);
    if (board.checkHit) return true;
    return false;
  };

  const handleClick = (e) => {
    console.log(e);
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
