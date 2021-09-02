// factory function to produce ships. Ships are objects
// that include their length, where they have been hit, and whether or not they've been sunk

const Ship = (name, length) => {
  let sunk = false;
  let horizontal = true;

  const hits = Array(length).fill(false);

  const hit = (position) => {
    if (position <= hits.length) hits[position] = true;
  };

  const sink = () => {
    if (!hits.includes(false)) sunk = true;
  };

  const switchOrientation = () => {
    return (horizontal = !horizontal);
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
    get horizontal() {
      return horizontal;
    },
  };
};

module.exports = Ship;
