const aiLogic = () => {
  let hits = [{ x: 0, y: 0, try: [{ x: 0, y: 1 }] }];
  let misses = [];
  let remainingShips = [2, 3, 3, 4, 5];

  const checkHit = (row, column, grid) => {
    if (grid[row][column].hit) return true;
  };

  const checkNextSquares = (row, column, grid) => {
    if (!grid[row][column - 1].hit) hits[0].try.push({ row, column: column - 1 });
    if (!grid[row][column + 1].hit) hits[0].try.push({ row, column: column + 1 });
    if (!grid[row - 1][column].hit) hits[0].try.push({ row: row + 1, column: column });
    if (!grid[row + 1][column].hit) hits[0].try.push({ row: row - 1, column: column });
  };

  const attackLine = (row, column, grid) => {};

  const succesfulHit = (coordinates) => {
    hits.unshift(coordinates); // eg. 3,3
    checkNextSquares();
    //place hit on first one e.g. attack(hits[0].try[0].row, hits[0].try[0].column,)
    //if miss, remove from try list e.g. hits[0].try[0].shift();
    //if hit, keep going in that direction until miss e.g.

    /* 
    attackLine = hits[0].try[0]
    */

    let nextColumnToAttack;
    if (coordinates.row === 0) {
      nextColumnToAttack = coordinates.column + 1;
    } else {
      nextColumnToAttack = coordinates.column - 1;
    }
  };

  return {
    get hits() {
      return hits;
    },
  };
};
