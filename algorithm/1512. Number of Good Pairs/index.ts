export function numIdenticalPairs(nums: number[]): number {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j] && i < j) {
        count++;
      }
    }
  }

  return count;
}
