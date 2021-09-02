import { useReducer } from 'react';
import './App.css';
import GridContainer from './components/GridContainer';
const gameController = require('./factories/gamecontroller');

function reducer(state, action) {}

function App() {
  const [playerOne, playerOneUpdate] = useReducer(reducer, gameController.playerOne);
  const [playerTwo, playerTwoUpdate] = useReducer(reducer, gameController.playerOne);

  console.log(playerOne);
  console.log(playerTwo);
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <GridContainer grid={playerOne.board.grid}></GridContainer>
      </header>
    </div>
  );
}

export default App;
