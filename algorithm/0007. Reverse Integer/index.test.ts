import { reverseInteger } from '.';

const name = 'reverseInteger';
const tests = [
  {
    n: 123,
    result: 321,
  },
  {
    n: -123,
    result: -321,
  },
  {
    n: 120,
    result: 21,
  },
  {
    n: 0,
    result: 0,
  },
  {
    n: 1534236469,
    result: 0,
  },
];

describe(`#${name})`, () => {
  for (const i of tests) {
    test(`${name}(${i.n}) should return ${i.result}`, () => {
      expect(reverseInteger(i.n)).toStrictEqual(i.result);
    });
  }
});
