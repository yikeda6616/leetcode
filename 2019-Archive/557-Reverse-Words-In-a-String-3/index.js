/**
 * Example:
 * Input: "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 *
 */

/**
 * @param {string} s
 * @return {string}
 */
export function reverseWords(s) {
  const words = s.split(' ');
  const reversedWords = [];
  let result = '';
  words.map(word => {
    let reversedWord = '';
    for (let i = 0; i < word.length; i++) {
      const j = word.length - i - 1;
      reversedWord += word[j];
    }
    reversedWords.push(reversedWord);
    result = reversedWords.join(' ');
  });
  return result;
}
