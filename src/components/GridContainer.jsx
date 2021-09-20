import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const GridContainer = (props) => {
  const playerGrid = props.grid.map((row, indexX) => {
    return row.map((cell, indexY) => {
      return (
        <Cell
          key={`${indexX}${indexY}`}
          coordinates={`${indexX}${indexY}`}
          handleClick={props.clickFunction}
          ship={cell.ship ? true : false}
          hit={cell.hit ? true : false}
          ai={props.ai}
        />
      );
    });
  });

  return <GridBox>{playerGrid}</GridBox>;
};

export default GridContainer;

export const GridBox = styled.div`
  width: 400px;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(10, 10%);
`;
