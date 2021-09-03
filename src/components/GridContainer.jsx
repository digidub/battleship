import React from 'react';

const GridContainer = (props) => {
  const playerGrid = props.grid.map((row) => {
    return (
      <div>
        x
        {row.map((column) => {
          return <div>x</div>;
        })}
      </div>
    );
  });

  return <div>{playerGrid}</div>;
};

export default GridContainer;
