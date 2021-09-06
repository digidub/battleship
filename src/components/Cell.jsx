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
    <BattleCell id={props.coordinates} onClick={props.clickFunction}>
      {props.children}
    </BattleCell>
  );
};

export default Cell;

const BattleCell = styled.div`
  border: 1px solid black;
  &:hover {
    cursor: crosshair;
    background: #f0f0f0;
    opacity: 0.5;
  }
`;
