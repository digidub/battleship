import { useReducer } from 'react';
import './App.css';
import GridContainer from './components/GridContainer';
import { GridContext } from './context';
const gameController = require('./factories/gamecontroller');

function reducer(state, action) {
  switch (action.type) {
    case 'hit':
      return {
        ...state,
      };
    default:
      throw new Error('woops');
  }
}

function App() {
  const [playerOne, playerOneUpdate] = useReducer(reducer, gameController.playerOne.board.grid);
  // const [playerTwo, playerTwoUpdate] = useReducer(reducer, gameController.playerTwo.board.grid);

  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Battleships</h1>
      </header>
      <GridContext.Provier value={{ playerOne, playerOneUpdate }}>
        <GridContainer clickFunction={handleClick} grid={playerOne}></GridContainer>
      </GridContext.Provier>
    </div>
  );
}

export default App;
