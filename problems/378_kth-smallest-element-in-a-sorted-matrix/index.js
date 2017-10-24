/**
 * Problem: https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/
 */
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  var len = matrix.length, i, j;

  var merge = function (head, tail) {
    var res = [];
    if (head === tail) {
      for (i = 0; i < len; ++i) res[i] = matrix[head][i];
      return res;
    }

    var mid = parseInt((tail + head) / 2);
    var res1, res1;
    if (tail - head > 1) {
      res1 = merge(head, mid);
      res2 = merge(mid + 1, tail);
    } else {
      res1 = matrix[head];
      res2 = matrix[tail];
    }

    i = j = 0;
    while (res1[i] !== undefined || res2[j] !== undefined) {
      if (res1[i] === undefined) {
        res.push(res2[j++]);
      } else if (res2[j] === undefined) {
        res.push(res1[i++]);
      } else if (res1[i] <= res2[j]) {
        res.push(res1[i++]);
      } else {
        res.push(res2[j++]);
      }
    }
    return res;
  };

  return(merge(0, len - 1)[k - 1]);
};
module.exports = kthSmallest;
