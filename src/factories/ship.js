const randomCoordinates = require('./randomCoordinates');

const Ship = (name, length) => {
  let sunk = false;
  let horizontal = true;

  const hits = Array(length).fill(false);

  const hit = (position) => {
    if (position <= hits.length) hits[position] = true;
    console.log(hits);
    sinkShip();
  };

  const sinkShip = () => {
    if (hits.every((hit) => hit === true)) sunk = true;
    console.log(sunk);
  };

  // const checkSunk = () => {
  //   if (!hits.includes(false))
  // };

  const rotate = () => {
    horizontal = !horizontal;
  };

  const randomOrientation = () => {
    const { x } = randomCoordinates();
    for (let i = 0; i < x; i += 1) {
      rotate();
    }
  };

  return {
    name,
    length,
    hit,
    // checkSunk,
    rotate,
    randomOrientation,
    get sunk() {
      return sunk;
    },
    get hits() {
      return hits;
    },
    get horizontal() {
      return horizontal;
    },
  };
};

module.exports = Ship;
