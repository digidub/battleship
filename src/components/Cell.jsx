import React from 'react';
import styled from 'styled-components';

const Cell = (props) => {
  return (
    <BattleCell id={props.coordinates} onClick={props.clickFunction} ship={props.ship}>
      {props.hitShip ? 'hit' : ''}
    </BattleCell>
  );
};

export default Cell;

const BattleCell = styled.div`
  border: 1px solid black;
  height: 90px;
  background: ${(props) => (props.ship ? 'pink' : 'white')};
  &:hover {
    cursor: crosshair;
    background: #f0f0f0;
    opacity: 0.5;
  }
`;
