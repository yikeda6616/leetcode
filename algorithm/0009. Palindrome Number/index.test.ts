import { isPalindrome } from '.';

const name = 'isPalindrome';
const tests = [
  {
    n: 121,
    result: true,
  },
  {
    n: -121,
    result: false,
  },
  {
    n: 10,
    result: false,
  },
  {
    n: -101,
    result: false,
  },
];

describe(`#${name})`, () => {
  for (const i of tests) {
    test(`${name}(${i.n}) should return ${i.result}`, () => {
      expect(isPalindrome(i.n)).toStrictEqual(i.result);
    });
  }
});
