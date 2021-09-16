import React from 'react';
import styled from 'styled-components';

const Cell = (props) => {
  return (
    <BattleCell
      id={props.coordinates}
      onMouseEnter={props.handleHover}
      onClick={props.handleClick}
      isHovering={props.isHovering}
      ship={props.ship}
      hit={props.hit}
    />
  );
};

export default Cell;

const BattleCell = styled.div`
  border: 1px solid black;
  height: auto;
  background: ${(props) => (props.isHovering && props.isHovering.includes(props.id) ? 'pink' : 'white')};
  &:hover {
    cursor: crosshair;
  }
`;
