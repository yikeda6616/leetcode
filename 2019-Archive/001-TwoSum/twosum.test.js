import { twoSum } from './twosum';

describe('twoSum()', () => {
  test('[2, 7, 11, 15]', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  });
});
