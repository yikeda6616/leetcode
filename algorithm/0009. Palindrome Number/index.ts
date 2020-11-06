function isPalindrome2(x: number): boolean {
  const invertedX = Number(String(Math.abs(x)).split('').reverse().join(''));

  const range = 2147483647; // 32-bit signed integer range (i.e. 2^31
  if (invertedX > range) {
    return false;
  } else if (`${x}`.includes('-')) {
    return false;
  } else if (x === invertedX) {
    return true;
  }
  return false;
}

export function isPalindrome(x: number): boolean {
  const str = x.toString();
  const len = str.length;
  let palindrome = true;

  for (let i = 0; i < len / 2; i += 1) {
    if (str[i] !== str[len - i - 1]) {
      palindrome = false;
    }
  }

  return palindrome;
}
