const testcase = [-1, 0, 3, 5, 9, 12];

const targetA = 9;
// Output: 4
// 9 exists in nums and its index is 4

const targetB = 2;
// Output: -1
// 2 does not exist in nums so return -1

// Notes:
// 1. All elements in nums are unique.
// 2. n will be in the range [1, 10000].
// 3. The value of each element in nums will be in the range [-9999, 9999]

const search = (nums: number[], target: number): number => {
  if (nums == null || nums.length == 0) return -1;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + (right - left) / 2;
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

search(testcase, targetA);
search(testcase, targetB);
