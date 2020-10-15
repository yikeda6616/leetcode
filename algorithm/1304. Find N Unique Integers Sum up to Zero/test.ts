import { sumZero } from '.';

const name = 'sumZero';
const tests = [
  {
    n: 5,
    result: [0, -1, 1, -2, 2],
  },
  {
    n: 3,
    result: [0, -1, 1],
  },
  {
    n: 1,
    result: [0],
  },
];

describe(`#${name})`, () => {
  for (const i of tests) {
    test(`${name}(${i.n}) should return ${i.result}`, () => {
      expect(sumZero(i.n)).toStrictEqual(i.result);
    });
  }
});
