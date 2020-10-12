import { balancedStringSplit } from '.';

const name = 'balancedStringSplit';
const tests = [
  {
    s: 'RLRRLLRLRL',
    result: 4,
  },
  {
    s: 'RLLLLRRRLR',
    result: 3,
  },
  {
    s: 'LLLLRRRR',
    result: 1,
  },
  {
    s: 'RLRRRLLRLL',
    result: 2,
  },
];

describe(`#${name}`, () => {
  for (const i of tests) {
    test(`${name}(${i.s}) should return ${i.result}`, () => {
      expect(balancedStringSplit(i.s)).toStrictEqual(i.result);
    });
  }
});
