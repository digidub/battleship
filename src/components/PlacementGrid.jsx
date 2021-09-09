import React from 'react';
import Cell from './Cell';
import { GridBox } from './GridContainer';

const PlacementGrid = (props) => {
  const handleMouseOver = (e) => {
    console.log(e);
  };

  const placementGrid = props.grid.map((row, indexX) => {
    return row.map((cell, indexY) => {
      return <Cell key={`${indexX}${indexY}`} coordinates={`${indexX}${indexY}`} mouseOver={handleMouseOver} />;
    });
  });

  return <GridBox>{placementGrid}</GridBox>;
};

export default PlacementGrid;
