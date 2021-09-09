import React from 'react';
import styled from 'styled-components';

const Cell = (props) => {
  return <BattleCell id={props.coordinates} onClick={props.clickFunction} ship={props.ship} hit={props.hit} onMouseOver={props?.mouseOver} />;
};

export default Cell;

const handleCellColour = (props) => {
  if (props.ship && props.hit) return 'red';
  if (props.ship) return 'pink';
  if (props.hit) return 'grey';
  return 'white';
};

const BattleCell = styled.div`
  border: 1px solid black;
  height: auto;
  background: ${(props) => handleCellColour(props)};
  &:hover {
    cursor: crosshair;
    background: #f0f0f0;
    opacity: 0.5;
  }
`;

// const BattleCellHover = styled.div`
//   border: 1px solid black;
//   height: auto;
//   background: grey;
//   &:hover {
//     cursor: crosshair;
//     background: #f0f0f0;
//     opacity: 0.5;
//   }
// `;

// props.inGrid &&
//     props.coordinates === `${props.coords[0]}` + `${props.coords[1]}` &&
//     props.coordinates === `${props.coords[0]}` + `${props.coords[0] + props.ships[0].length}` ? (
//     <BattleCellHover id={props.coordinates} onClick={props.clickFunction} ship={props.ship} hit={props.hit} onMouseOver={props?.mouseOver} />
//   ) :
