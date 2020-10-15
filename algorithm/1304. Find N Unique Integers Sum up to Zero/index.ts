export function sumZero(n: number): number[] {
  const result: number[] = [];
  if (n % 2 === 1) {
    result.push(0);
  }

  for (let i = 1; i <= n / 2; i++) {
    result.push(-i, i);
  }

  return result;
}

export function sumZeroV2(n: number): number[] {
  const used_nums: Array<number> = [];
  let current_num;
  for (let i = 0; i < n; i++) {
    current_num = i;
    if (i > 1 && i == n - 1) {
      current_num = -used_nums.reduce((a: number, x: number) => a + x);
    }
    used_nums.push(current_num);
    current_num += used_nums[i];
  }
  return used_nums;
}
