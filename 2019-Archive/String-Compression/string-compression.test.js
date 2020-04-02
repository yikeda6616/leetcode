import { compression } from './string-compression';

describe('string-compression', () => {
  test('aaabbcccc is a3b2c4', () => {
    expect(compression('aaabbcccc')).toBe('a3b2c4');
  });
});
