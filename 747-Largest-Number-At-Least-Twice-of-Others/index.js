/**
 * @param {number[]} nums
 * @return {number}
 */
function dominantIndex(nums) {
  let [max, maxIndex, second] = [0, 0, 0];

  nums.forEach((num, index) => {
    if (max <= num) {
      max = num;
      maxIndex = index;
    } else if (second <= num) {
      second = num;
    }
  });
  console.log(max, second, maxIndex);
  return max >= second * 2 ? maxIndex : -1;
}

// const testCases = [[0, 0, 2, 3], [1], [0, 0, 0, 1], [3, 6, 1, 0], [1, 2, 3, 4]];

// testCases.forEach(item => dominantIndex(item));

console.log(dominantIndex([0, 0, 2, 3]));
