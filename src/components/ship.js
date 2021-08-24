// factory function to produce ships. Ships are objects
// that include their length, where they have been hit, and whether or not they've been sunk

const Ship = (name, length, orientation = 'horizontal') => {
  let sunk = false;
  const hits = Array(length).fill(false);

  const hit = (position) => {
    hits[position] = true;
  };

  return {
    name,
    length,
    orientation,
    sunk,
    hits,
    hit,
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
