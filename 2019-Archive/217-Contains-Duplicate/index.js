/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let result = false;
  let nums2 = [...nums];
  if (nums.length > 1) {
    for (let i of nums) {
      nums2.shift();
      for (let j of nums2) {
        if (i === j) {
          return true;
        } else {
          result = false;
        }
      }
    }
  } else {
    result = false;
  }
  return result;
};
