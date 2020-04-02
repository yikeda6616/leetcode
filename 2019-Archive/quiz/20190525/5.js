Promise.resolve([1, 2, 3])
  .then(([y, x]) => x / y) // [1, 2] => [2 / 1]
  .then(value => console.log(value));
