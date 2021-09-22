import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';
import { Button } from './commonStyling';
import { GridBox } from './GridContainer';

const PlacementGrid = ({ grid, placingShip, isHovering, handleHover, handleClick, handleRightClick, playerOneRandomPlacement }) => {
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

  return (
    <div>
      <GridBox>{placementGrid}</GridBox>
      <Button onClick={playerOneRandomPlacement}>Random Placement</Button>
    </div>
  );
};

export default PlacementGrid;
