/**
 * Problem: https://leetcode.com/problems/count-primes/description/
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  var visited = [];
  for (var i = 2; i < n; ++i) visited[i] = 1;

  for (var i = 2; i < n / 2; ++i) {
    for (var j = i * 2; j < n; j += i) {
      visited[j] = visited[j] + 1;
    }
  }

  var count = 0;
  for (var i = 2; i < n; ++i) {
    if (1 === visited[i]) count++;
  }

  return count;
};
module.exports = countPrimes;
