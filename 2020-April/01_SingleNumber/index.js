/**
 * @param {number[]} nums
 * @return {number}
 */
export const singleNumber = nums => nums.reduce((num, result) => num ^ result);
