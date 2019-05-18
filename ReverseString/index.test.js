import { reverseString } from './';

describe('reverseString()', () => {
  it("returns ['o', 'l', 'l', 'e', 'h']", () => {
    const testCase = ['h', 'e', 'l', 'l', 'o'];
    reverseString(testCase);
    expect(testCase).toStrictEqual(['o', 'l', 'l', 'e', 'h']);
  });
});
