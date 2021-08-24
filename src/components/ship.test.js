/* eslint-disable comma-dangle */
const Ship = require('./ship');

test('produces a basic ship object', () => {
  expect(Ship('shippy', 3)).toStrictEqual(
    expect.objectContaining({
      name: 'shippy',
      length: 3,
      orientation: 'horizontal',
      sunk: false,
      hits: [false, false, false],
    })
  );
});

test('produces a longer ship object', () => {
  expect(Ship('longerShip', 5)).toStrictEqual(
    expect.objectContaining({
      name: 'longerShip',
      length: 5,
      orientation: 'horizontal',
      sunk: false,
      hits: [false, false, false, false, false],
    })
  );
});

describe('ship', () => {
  describe('hit position', () => {
    it('hits a given position in the hits array', () => {
      const shipOne = Ship('testShip', 4);
      shipOne.hit(3);
      expect(shipOne.hits).toStrictEqual([false, false, false, true]);
    });
  });
});
