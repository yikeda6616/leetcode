/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
  const result = [];
  let acc = 0;

  for (let i = 0; i < nums.length; i++) {
    acc += nums[i];

    result.push(acc);
  }

  return result;
};

module.exports = runningSum;
