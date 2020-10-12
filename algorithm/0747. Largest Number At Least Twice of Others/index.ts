export function dominantIndexV1(nums: number[]): number {
  let [max, maxIndex, second] = [0, 0, 0];

  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      second = max;
      max = nums[i];
      maxIndex = i;
    } else if (second < nums[i]) {
      second = nums[i];
    }
  }

  return max >= second * 2 ? maxIndex : -1;
}

export function dominantIndexV2(nums: number[]): number {
  const sorted_nums = nums
    .map((num, index) => {
      return { index: index, value: num };
    })
    .sort((a, b) => b.value - a.value);

  return sorted_nums[0].value >= sorted_nums[1].value * 2
    ? sorted_nums[0].index
    : -1;
}
