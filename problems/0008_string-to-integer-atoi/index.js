/**
 * Problem: https://leetcode.com/problems/string-to-integer-atoi/description/
 */
/**
 * @param {string} str
 * @return {number}
 */
let myAtoi = function(str) {
  let result = parseInt(str) ? parseInt(str) : 0;
  if (result > 2147483647)
    return 2147483647;
  else if (result < -2147483648)
    return -2147483648;
  else
    return result;
};

