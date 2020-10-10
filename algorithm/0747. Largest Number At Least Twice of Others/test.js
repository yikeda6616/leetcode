const { dominantIndexV2 } = require('.');

const name = 'dominantIndex';
const tests = [
  {
    nums: [3, 6, 1, 0],
    result: 1,
  },
  {
    nums: [1, 2, 3, 4],
    result: -1,
  },
  {
    nums: [0, 0, 0, 1],
    result: 3,
  },
];

describe(`#${name})`, () => {
  for (const i of tests) {
    test(`${name}(${i.nums}) should return ${i.result}`, () => {
      expect(dominantIndexV2(i.nums)).toStrictEqual(i.result);
    });
  }
});
