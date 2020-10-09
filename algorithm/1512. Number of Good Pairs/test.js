const { numIdenticalPairs } = require('.');

const name = 'numIdenticalPairs';
const tests = [
  {
    nums: [1, 2, 3, 1, 1, 3],
    result: 4,
  },
  {
    nums: [1, 1, 1, 1],
    result: 6,
  },
  {
    nums: [1, 2, 3],
    result: 0,
  },
];

describe(`#${name})`, () => {
  for (const i of tests) {
    test(`${name}(${i.nums}) should return ${i.result}`, () => {
      expect(numIdenticalPairs(i.nums)).toStrictEqual(i.result);
    });
  }
});
