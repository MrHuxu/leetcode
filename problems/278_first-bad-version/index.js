/**
 * Problem: https://leetcode.com/problems/first-bad-version/description/
 */
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
  return function(n) {
    var front = 1, tail = n, mid;
    while (tail > front + 1) {
      mid = parseInt((front + tail) / 2);
      if (isBadVersion(mid))
        tail = mid;
      else
        front = mid;
    }
    return isBadVersion(front) ? front : tail;
  };
};
module.exports = solution;
