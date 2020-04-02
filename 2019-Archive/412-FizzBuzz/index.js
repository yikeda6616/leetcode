/**
 * @param {number} n
 * @return {string[]}
 */

const n = 15;

export function fizzBuzz(n) {
  const arr = [];
  for (let i = 1; i <= n; i += 1) {
    const x =
      i % 3 === 0 && i % 5 === 0
        ? 'FizzBuzz'
        : i % 3 === 0
        ? 'Fizz'
        : i % 5 === 0
        ? 'Buzz'
        : `${i}`;
    arr.push(x);
  }
  return arr;
}

fizzBuzz(n);
