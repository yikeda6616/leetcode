import { montecarlo } from './montecarlo';

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false
      };
    }
  }
});

describe('montecarlo', () => {
  test('Pi approx value', () => {
    expect(montecarlo(1)).toBeWithinRange(3.12, 3.16);
  });
});
