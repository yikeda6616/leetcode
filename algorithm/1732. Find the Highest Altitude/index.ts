export function largestAltitude(gain: number[]): number {
  let max = 0;
  let pos = 0;
  let altitudes = [0];
  for (let i = 0; i < gain.length; i++) {
    pos += gain[i];
    altitudes.push(pos);
  }
  for (let i = 0; i < altitudes.length; i++) {
    if (max < altitudes[i]) {
      max = altitudes[i];
    }
  }
  console.log(altitudes);
  console.log('max: ' + max);

  return max;
}

const test1 = [-5, 1, 5, 0, -7];
largestAltitude(test1);

const test2 = [-4, -3, -2, -1, 4, 3, 2];
largestAltitude(test2);
