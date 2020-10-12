export function defangIPaddrV1(address: string): string {
  const arr = [];
  [...address].forEach((i) => (i == '.' ? arr.push(`[${i}]`) : arr.push(i)));
  return arr.join('');
}

export const defangIPaddrV2 = (address: string): string =>
  address.split('.').join('[.]');
