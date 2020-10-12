import { shuffle } from '.';

const name = 'shuffle';
const tests = [
  {
    nums: [2, 5, 1, 3, 4, 7],
    n: 3,
    result: [2, 3, 5, 4, 1, 7],
  },
  {
    nums: [1, 2, 3, 4, 4, 3, 2, 1],
    n: 4,
    result: [1, 4, 2, 3, 3, 2, 4, 1],
  },
  {
    nums: [1, 1, 2, 2],
    n: 2,
    result: [1, 2, 1, 2],
  },
];

describe(`#${name})`, () => {
  for (const i of tests) {
    test(`${name}(${i.nums}, ${i.n}) should return ${i.result}`, () => {
      expect(shuffle(i.nums, i.n)).toStrictEqual(i.result);
    });
  }
});
