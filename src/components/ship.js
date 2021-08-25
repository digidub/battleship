// factory function to produce ships. Ships are objects
// that include their length, where they have been hit, and whether or not they've been sunk

const Ship = (name, length) => {
  let sunk = false;
  let orientation = 'horizontal';

  const hits = Array(length).fill(false);

  const hit = (position) => {
    if (position <= hits.length) hits[position] = true;
  };

  const sink = () => {
    if (!hits.includes(false)) sunk = true;
  };

  const switchOrientation = () => {
    if (orientation === 'horizontal') orientation = 'vertical';
    else orientation = 'horizontal';
  };

  return {
    name,
    length,
    hit,
    sink,
    switchOrientation,
    // get values using getters
    get sunk() {
      return sunk;
    },
    get hits() {
      return hits;
    },
    get orientation() {
      return orientation;
    },
  };
};

//   {
//   ships: [
//     {
//       name: 'destroyer',
//       length: 2,
//       sunk: false,
//       hits: [false, false],
//     },
//     {
//       name: 'submarine',
//       length: 3,
//       sunk: false,
//       hits: [false, false, false],
//     },
//     {
//       name: 'cruiser',
//       length: 3,
//       sunk: false,
//       hits: [false, false, false],
//     },
//     {
//       name: 'battleship',
//       length: 4,
//       sunk: false,
//       hits: [false, false, false, false],
//     },
//     {
//       name: 'carrier',
//       length: 5,
//       sunk: false,
//       hits: [false, false, false, false, false],
//     }
//   ],
//   hit: function(coordinates) => {};
// }};
module.exports = Ship;
