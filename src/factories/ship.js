import randomCoordinates from './randomCoordinates';

const Ship = (name, length) => {
  let sunk = false;
  let horizontal = true;

  const hits = Array(length).fill(false);

  const hit = (position) => {
    if (position <= hits.length) hits[position] = true;
    sinkShip();
  };

  const sinkShip = () => {
    if (hits.every((hit) => hit === true)) sunk = true;
  };

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

export default Ship;
