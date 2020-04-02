import { fizzBuzz } from './';

describe('fizzBuzz()', () => {
  const testCase = 15;
  const testResult = [
    '1',
    '2',
    'Fizz',
    '4',
    'Buzz',
    'Fizz',
    '7',
    '8',
    'Fizz',
    'Buzz',
    '11',
    'Fizz',
    '13',
    '14',
    'FizzBuzz'
  ];
  test('fizzBuzz(15)', () => {
    expect(fizzBuzz(testCase)).toBe(testResult);
  });
});
