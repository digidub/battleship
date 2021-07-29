const Ship = require('./ship');

test('produces an object', () => {
  expect(Ship('shippy', 3)).toStrictEqual({
    name: 'shippy',
    length: 3,
    orientation: 'horizontal',
  });
});
