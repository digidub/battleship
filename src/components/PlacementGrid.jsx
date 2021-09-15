import React from 'react';
import Cell from './Cell';
import { GridBox } from './GridContainer';

const PlacementGrid = ({ grid, placingShip, isHovering, handleHover, handleClick }) => {
  const placementGrid = grid.map((row, indexX) => {
    return row.map((cell, indexY) => {
      return (
        <Cell
          key={`${indexX}${indexY}`}
          cellID={`${indexX}${indexY}`}
          coordinates={`${indexX}${indexY}`}
          isHovering={isHovering}
          handleHover={handleHover}
          handleClick={handleClick}
        />
      );
    });
  });

  return <GridBox>{placementGrid}</GridBox>;
};

export default PlacementGrid;
