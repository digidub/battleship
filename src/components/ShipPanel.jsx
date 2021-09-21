import React from 'react';
import styled from 'styled-components';

const ShipPanel = ({ ships, handleClick }) => {
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
          <div key={ship.name}>
            <div>{ship.name}</div>
            <ShipBox id={ship.name} onClick={handleClick}>
              {shipDiagram(ship.length)}
            </ShipBox>
          </div>
        );
      });
    }
    return shipPanel;
  }

  return (
    <div>
      <h2>Ships</h2>
      <p>select a ship by clicking on it. Rotate the ship by right clicking in side the grid. Click again to place.</p>
      {displayShips()}
    </div>
  );
};

export default ShipPanel;

const ShipBox = styled.div`
  width: 40px;
  height: 40px;
  display: grid;
  grid-template-columns: repeat(5, 100%);
  grid-auto-columns: min-content;
`;

const ShipCell = styled.div`
  border: 1px solid black;
  height: auto;
  background: white;
  &:hover {
    cursor: pointer;
  }
`;
