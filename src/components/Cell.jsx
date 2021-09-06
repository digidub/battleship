import React, { useContext } from 'react';
import styled from 'styled-components';
import { GridContext } from '../context';

const Cell = (props) => {
  const { playerOneUpdate } = useContext(GridContext);

  const handleClick = (e) => {
    console.log(e);
    playerOneUpdate({
      type: 'hit',
    });
  };

  return (
    <BattleCell id={props.coordinates} onClick={props.clickFunction} ship={props.ship}>
      {props.children}
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
