/**
 * Problem: https://leetcode.com/problems/repeated-string-match/description/
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  let result = 1, str = A, found = false;
  do {
    if (str.includes(B)) {
      found = true;
      break;
    } else {
      str += A;
      result++;
    }
  } while (result <= 2 || str.length <= B.length * 2);

  return found ? result : - 1;
};

module.exports = repeatedStringMatch;
