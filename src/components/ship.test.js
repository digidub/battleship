const Ship = require('./ship');

test('produces a basic ship object', () => {
  expect(Ship('shippy', 3)).toStrictEqual({
    name: 'shippy',
    length: 3,
    orientation: 'horizontal',
    sunk: false,
    hits: [false, false, false],
  });
});

test('produces a longer ship object', () => {
  expect(Ship('longerShip', 5)).toStrictEqual({
    name: 'longerShip',
    length: 5,
    orientation: 'horizontal',
    sunk: false,
    hits: [false, false, false, false, false],
  });
});
