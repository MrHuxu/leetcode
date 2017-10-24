/**
 * Problem: https://leetcode.com/problems/queue-reconstruction-by-height/description/
 */
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort(function (p1, p2) {
    if (p1[0] === p2[0]) {
      return p1[1] > p2[1] ? 1 : -1;
    } else {
      return p1[0] < p2[0] ? 1 : -1;
    }
  });

  var result = [];
  people.forEach(function (p, index) {
    result.splice(p[1], 0, p);
  });
  return result;
};
module.exports = reconstructQueue;
