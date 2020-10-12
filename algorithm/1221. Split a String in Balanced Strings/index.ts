export function balancedStringSplit(s: string): number {
  let [cur, count] = [0, 0];
  for (const c of s) {
    cur += c === 'R' ? +1 : -1;
    count += cur === 0 ? 1 : 0;
  }
  return count;
}
