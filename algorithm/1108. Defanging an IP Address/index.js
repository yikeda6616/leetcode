/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddrV1 = function (address) {
  const arr = [];
  [...address].forEach((i) => (i == '.' ? arr.push(`[${i}]`) : arr.push(i)));
  return arr.join('');
};

const defangIPaddrV2 = (address) => address.split('.').join('[.]');

module.exports = { defangIPaddrV2 };
