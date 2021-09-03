import React from 'react';
import styled from 'styled-components';

const GridContainer = (props) => {
  const playerGrid = props.grid.map((row) => {
    return row.map((cell) => {
      return <div>{cell.ship ? <p>{cell.ship.name}</p> : <p>blank</p>}</div>;
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
