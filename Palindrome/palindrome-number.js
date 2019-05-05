/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
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

module.exports = isPalindrome;
