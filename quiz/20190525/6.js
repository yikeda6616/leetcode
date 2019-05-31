Promise.resolve({ a: 1, b: 2, c: 3 })
  .then(({ x, y, z }) => x + y + z)
  .catch(error => console.log('error:' + error))
  .then(value => console.log('value:' + value));
