export function shuffle(nums: number[], n: number): number[] {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[n + i]);
  }

  return result;
}
