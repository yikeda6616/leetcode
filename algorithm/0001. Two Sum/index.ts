export function twoSum(nums: number[], target: number): number[] {
  let answer: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] == target - nums[i]) {
        answer = [i, j];
      }
    }
  }
  return answer;
}
