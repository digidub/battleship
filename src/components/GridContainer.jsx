import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const GridContainer = (props) => {
  const playerGrid = props.grid.map((row, indexX) => {
    return row.map((cell, indexY) => {
      return (
        <Cell key={`${indexX}${indexY}`} clickFunction={props.clickFunction}>
          {cell.ship ? <p>{cell.ship.name}</p> : <p>·</p>}
        </Cell>
      );
    });
  });

  return <GridBox>{playerGrid}</GridBox>;
};

export default GridContainer;

const GridBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(10, 10%);
`;
