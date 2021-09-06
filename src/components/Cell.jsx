import React from 'react';
import styled from 'styled-components';

const Cell = (props) => {
  return <BattleCell onClick={props.clickFunction}>{props.children}</BattleCell>;
};

export default Cell;

const BattleCell = styled.div`
  border: 1px solid black;
`;
