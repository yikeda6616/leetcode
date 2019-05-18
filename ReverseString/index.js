/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

export function reverseString(s) {
  for (let i = 0; i < s.length / 2; i++) {
    const j = s.length - i - 1;

    [s[i], s[j]] = [s[j], s[i]];
  }
}

export function reverseStringRecursion(s) {
  helper(0, s);
}

function helper(i, arr) {
  if (i >= arr.length / 2) {
    return;
  }
  const i2 = arr.length - i - 1;
  [arr[i], arr[i2]] = [arr[i2], arr[i]];
  helper(i + 1, arr);
}
