export function reverseInteger(x: number): number {
  const invertedX = Number(String(Math.abs(x)).split('').reverse().join(''));
  const range = 2147483647; // 32-bit signed integer range (i.e. 2^31
  if (invertedX > range) {
    return 0;
  } else {
    return `${x}`.includes('-') ? parseInt(`-${invertedX}`) : invertedX;
  }
}
