const twoSum = require('./twoSum');

describe('twoSum()', () => {
  test('[2, 7, 11, 15]', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  });
  test('[3, 2, 4], 6', () => {
    expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
  });
});
