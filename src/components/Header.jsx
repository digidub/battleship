import React, { Fragment, useState } from 'react';
import { Button } from './commonStyling';
import styled from 'styled-components';

const Header = () => {
  const [viewInstruction, setViewInstructions] = useState(false);

  const toggleInstructions = () => {
    setViewInstructions((viewInstruction) => !viewInstruction);
  };

  return (
    <HeaderWrapper>
      <h1>Battleships</h1>
      <p>The classic battleships game from when you were a kid (or maybe you still enjoy it?)</p>
      <Button onClick={toggleInstructions}>{viewInstruction ? 'hide' : 'show'} instructions</Button>
      {viewInstruction && (
        <Fragment>
          <p>
            <b>Placing ships:</b> select a ship by clicking on it. Rotate the ship by right clicking inside the grid. Left click to place.
          </p>
          <p>
            <b>Attacking ships:</b> select an empty cell on your opponent's grid to attack it. If you hit, you get another turn!
          </p>
        </Fragment>
      )}
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
