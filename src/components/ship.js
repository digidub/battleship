// factory function to produce ships. Ships are objects
// that include their length, where they have been hit, and whether or not they've been sunk

const Ship = () => {
  // needs to produce multiple ships - 2, 3, 3, 4, 5
  const ships = [
    {
      name: 'destroyer',
      ship: ['x', 'x'],
    },
    {
      name: 'submarine',
      ship: ['x', 'x', 'x'],
    },
    {
      name: 'cruiser',
      ship: ['x', 'x', 'x'],
    },
    {
      name: 'battleship',
      ship: ['x', 'x', 'x', 'x'],
    },
    {
      name: 'carrier',
      ship: ['x', 'x', 'x', 'x', 'x'],
    },
  ];
};
