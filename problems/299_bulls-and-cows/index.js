/**
 * Problem: https://leetcode.com/problems/bulls-and-cows/description/
 */
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  var numA = 0, numB = 0, map = {};
  var i, len = secret.length;
  
  for (i = 0; i < len; ++i) {
    map[secret[i]] = map[secret[i]] ? map[secret[i]] + 1 : 1;
  }
  
  for (i = 0; i < len; ++i) {
    if (guess[i] === secret[i]) {
      ++numA;
      --map[guess[i]];
    }
  }
  for (i = 0; i < len; ++i) {
    if (guess[i] !== secret[i] && map[guess[i]]) {
      ++numB;
      --map[guess[i]];
    }
  }
  
  return numA + 'A' + numB + 'B';
};
module.exports = getHint;
