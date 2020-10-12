import { twoSum } from '.';

const name = 'twoSum';
const tests = [
  {
    nums: [2, 7, 11, 15],
    n: 9,
    result: [0, 1],
  },
  {
    nums: [3, 2, 4],
    n: 6,
    result: [1, 2],
  },
  {
    nums: [3, 3],
    n: 6,
    result: [0, 1],
  },
];

describe(`#${name})`, () => {
  for (const i of tests) {
    test(`${name}(${i.nums}, ${i.n}) should return ${i.result}`, () => {
      expect(twoSum(i.nums, i.n)).toStrictEqual(i.result);
    });
  }
});
