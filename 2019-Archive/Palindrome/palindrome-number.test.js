import { isPalindrome } from './palindrome-number';

describe('isPalindrome()', () => {
  test('121 is palindrome', () => {
    expect(isPalindrome(121)).toBe(true);
  });

  test('-121 is NOT palindrome', () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  test('10 is palindrome', () => {
    expect(isPalindrome(10)).toBe(false);
  });
});
