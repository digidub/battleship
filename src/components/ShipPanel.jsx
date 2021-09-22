import React from 'react';
import styled from 'styled-components';
import { Button } from './commonStyling';

const ShipPanel = ({ ships, handleClick, playerOneRandomPlacement, startGame, allShipsPlaced }) => {
  const shipDiagram = (length) => {
    return [...Array(length)].map((item, index) => {
      return <ShipCell key={index} />;
    });
  };

  function displayShips() {
    let shipPanel;
    if (ships.length > 0) {
      shipPanel = ships.map((ship) => {
        return (
          <ShipContainer key={ship.name}>
            <div>{ship.name}</div>
            <ShipBox id={ship.name} onClick={handleClick}>
              {shipDiagram(ship.length)}
            </ShipBox>
          </ShipContainer>
        );
      });
    }
    return shipPanel;
  }

  return (
    <ShipPanelContainer>
      <Button onClick={playerOneRandomPlacement}>Random Placement</Button>
      {allShipsPlaced && <Button onClick={startGame}>Start Game</Button>}
      {displayShips()}
    </ShipPanelContainer>
  );
};

export default ShipPanel;

const ShipContainer = styled.div`
  margin-bottom: 10px;
`;

const ShipBox = styled.div`
  width: 40px;
  height: 40px;
  display: grid;
  grid-template-columns: repeat(5, 100%);
  grid-auto-columns: min-content;
`;

const ShipCell = styled.div`
  border: 1px solid white;
  border-radius: 4px;
  height: auto;
  background: pink;
  &:hover {
    cursor: pointer;
  }
`;

const ShipPanelContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;
