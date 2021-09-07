import { useState } from 'react';
import './App.css';
import GridContainer from './components/GridContainer';
const gameController = require('./factories/gamecontroller');

// function reducer(state, action) {
//   console.log(action);
//   switch (action.type) {
//     case 'hit':
//       return (state = gameController.playerTwo.attack(gameController.playerOne.board, action.x, action.y));
//     default:
//       throw new Error('woops');
//   }
// }

function App() {
  const [playerOneGridState, setPlayerOneGridState] = useState(gameController.playerOne.board.grid);

  const handleClick = (e) => {
    const x = Number(e.target.id[0]);
    const y = Number(e.target.id[1]);
    gameController.playerTwo.attack(gameController.playerOne.board, x, y);
    setPlayerOneGridState(gameController.playerOne.board.grid);
  };

  return (
    <div className='App'>
      <GridContainer clickFunction={handleClick} grid={playerOneGridState}></GridContainer>
    </div>
  );
}

export default App;
