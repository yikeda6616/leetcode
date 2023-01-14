import { fourDigitNumber } from './util';

const name = 'fourDigitNumber';
const tests = [
  {
    n: '1',
    result: '0001',
  },
  {
    n: '11',
    result: '0011',
  },
  {
    n: '111',
    result: '0111',
  },
  {
    n: '1111',
    result: '1111',
  },
];

describe(`#${name})`, () => {
  for (const i of tests) {
    test(`${name}(${i.n}) should return ${i.result}`, () => {
      expect(fourDigitNumber(i.n)).toStrictEqual(i.result);
    });
  }
});
