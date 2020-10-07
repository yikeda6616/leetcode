const { runningSum } = require('.');

describe('runningSum()', () => {
  test('runningSum([3, 1, 2, 10, 1]) returns [3, 4, 6, 16, 17]', () => {
    expect(runningSum([3, 1, 2, 10, 1])).toStrictEqual([3, 4, 6, 16, 17]);
  });
});
