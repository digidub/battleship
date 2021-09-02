/* eslint-disable comma-dangle */
const Ship = require('./ship');

test('produces a basic ship object', () => {
  expect(Ship('shippy', 3)).toStrictEqual(
    expect.objectContaining({
      name: 'shippy',
      length: 3,
      horizontal: true,
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
      horizontal: true,
      sunk: false,
      hits: [false, false, false, false, false],
    })
  );
});

describe('ship hits', () => {
  describe('hit position', () => {
    it('hits a given position in the hits array', () => {
      const shipOne = Ship('testShip', 4);
      shipOne.hit(3);
      expect(shipOne.hits).toStrictEqual([false, false, false, true]);
    });
    it('hits multiple positions in the hits array', () => {
      const shipOne = Ship('testShip', 4);
      shipOne.hit(3);
      shipOne.hit(2);
      shipOne.hit(1);
      expect(shipOne.hits).toStrictEqual([false, true, true, true]);
    });
    it('cannot hit a position that is not in the array', () => {
      const shipOne = Ship('testShip', 4);
      shipOne.hit(5);
      expect(shipOne.hits).toStrictEqual([false, false, false, false]);
    });
  });
});

describe('ship sunk', () => {
  describe('all hits lead to a sunk ship', () => {
    it('set sink to true', () => {
      const shipOne = Ship('testShip', 2);
      shipOne.hit(0);
      shipOne.hit(1);
      shipOne.sink();
      expect(shipOne.sunk).toEqual(true);
    });
  });
});

describe('ship orientation', () => {
  describe('switches orientation', () => {
    it('sets horizontal to vertical', () => {
      const shipOne = Ship('testShip', 2);
      shipOne.switchOrientation();
      expect(shipOne.horizontal).toEqual(false);
    });
    it('sets horizontal to vertical back to horizontal', () => {
      const shipOne = Ship('testShip', 2);
      shipOne.switchOrientation();
      shipOne.switchOrientation();
      expect(shipOne.horizontal).toEqual(true);
    });
  });
});
