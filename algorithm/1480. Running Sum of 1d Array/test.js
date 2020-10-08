const { runningSum } = require('.');

const name = 'runningSum';
const tests = [
  {
    nums: [1, 2, 3, 4],
    result: [1, 3, 6, 10],
  },
  {
    nums: [1, 1, 1, 1, 1],
    result: [1, 2, 3, 4, 5],
  },
  {
    nums: [3, 1, 2, 10, 1],
    result: [3, 4, 6, 16, 17],
  },
];

describe(`#${name})`, () => {
  for (const i of tests) {
    test(`${name}(${i.nums})) returns ${i.result}`, () => {
      expect(runningSum(i.nums)).toStrictEqual(i.result);
    });
  }
});
