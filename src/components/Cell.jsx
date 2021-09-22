import React from 'react';
import styled from 'styled-components';

const Cell = ({ coordinates, handleHover, handleClick, handleRightClick, isHovering, ship, hit, ai }) => {
  return (
    <BattleCell
      id={coordinates}
      onMouseEnter={handleHover}
      onClick={handleClick}
      isHovering={isHovering}
      ship={ship}
      hit={hit}
      onContextMenu={handleRightClick}
      ai={ai}
    />
  );
};

export default Cell;

const handleCellColour = (props) => {
  if (props.isHovering && props.isHovering.includes(props.id)) return 'blue';
  if (props.ship && props.hit) return 'red';
  if (!props.ai) {
    if (props.ship) return 'pink';
  }
  if (props.hit) return 'grey';

  return '#df645f';
};

const BattleCell = styled.div`
  border: 1px solid white;
  border-radius: 4px;
  height: auto;
  background: ${(props) => handleCellColour(props)};
  &:hover {
    cursor: crosshair;
  }
`;
