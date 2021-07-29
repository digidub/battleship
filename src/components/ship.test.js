const Ship = require('./ship');

test('produces a basic ship object', () => {
  expect(Ship('shippy', 3)).toStrictEqual({
    name: 'shippy',
    length: 3,
    orientation: 'horizontal',
    sunk: false,
  });
});
