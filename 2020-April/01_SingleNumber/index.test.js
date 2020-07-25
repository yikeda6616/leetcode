import { singleNumber } from './index';

const testCase = [
  {
    input: [2, 2, 1],
    output: 1
  },
  {
    input: [4, 1, 2, 1, 2],
    output: 4
  }
];

describe('singleNumber()', () => {
  for (const i in testCase) {
    test(String(testCase[i].input), () => {
      expect(singleNumber(testCase[i].input)).toStrictEqual(testCase[i].output);
    });
  }
});
