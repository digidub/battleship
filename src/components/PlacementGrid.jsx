import React from 'react';
import Cell from './Cell';
import { GridBox } from './GridContainer';

const PlacementGrid = ({ grid, placingShip, isHovering, handleHover, handleClick, handleRightClick }) => {
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
          handleRightClick={handleRightClick}
          ship={cell.ship ? true : false}
        />
      );
    });
  });

  return <GridBox>{placementGrid}</GridBox>;
};

export default PlacementGrid;
