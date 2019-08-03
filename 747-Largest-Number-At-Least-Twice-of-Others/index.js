/**
 * @param {number[]} nums
 * @return {number}
 */
function dominantIndex(nums) {
  let max = -Infinity;
  let second = -Infinity;
  let maxIndex = 0;
  for (const [i, n] of nums.entries()) {
    if (n > max) {
      second = max;
      max = n;
      maxIndex = i;
    } else if (n > second) {
      second = n;
    }
  }
  if (max >= second * 2) {
    return maxIndex;
  }
  return -1;
}

// const testCases = [[0, 0, 2, 3], [1], [0, 0, 0, 1], [3, 6, 1, 0], [1, 2, 3, 4]];

// testCases.forEach(item => dominantIndex(item));
