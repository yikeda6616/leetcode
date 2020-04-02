import { reverseWords } from './';

const testCase = "Let's take LeetCode contest";
const testResult = "s'teL ekat edoCteeL tsetnoc";

describe('reverseWords()', () => {
  Test(`returns "s'teL ekat edoCteeL tsetnoc"`, () => {
    expect(reverseWords(testCase)).toBe(testResult);
  });
});
