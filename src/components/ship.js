// factory function to produce ships. Ships are objects
// that include their length, where they have been hit, and whether or not they've been sunk

const Ship = () => {
  // needs to produce multiple ships - 2, 3, 3, 4, 5
  const ships = [
    {
      name: 'destroyer',
      length: 2,
      sunk: false,
      ship: [false, false],
    },
    {
      name: 'submarine',
      length: 3,
      sunk: false,
      ship: [false, false, false],
    },
    {
      name: 'cruiser',
      length: 3,
      sunk: false,
      ship: [false, false, false],
    },
    {
      name: 'battleship',
      length: 4,
      sunk: false,
      ship: [false, false, false, false],
    },
    {
      name: 'carrier',
      length: 5,
      sunk: false,
      ship: [false, false, false, false, false],
    },
  ];
};
