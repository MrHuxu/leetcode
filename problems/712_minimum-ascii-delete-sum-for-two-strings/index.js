/**
 * Problem: https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/description/
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
  let min = null;

  const dfs = (i, j, sum) => {
    let m, n, minInc = null, inc1 = 0, inc2, found = false;
    for (; i < s1.length; ++i) {
      inc2 = 0;

      for (let k = j; k < s2.length; ++k) {
        if (s1[i] === s2[k]) {
          if (null === minInc || inc1 + inc2 <= minInc) {
            minInc = inc1 + inc2;
            m = i + 1;
            n = k + 1;
            found = true;
          }
        }
        inc2 += s2[k].charCodeAt();
      }

      inc1 += s1[i].charCodeAt();
    }

    if (found) {
      return dfs(m, n, minInc + sum);
    } else {
      while (j < s2.length) sum += s2[j++].charCodeAt();
      return sum += inc1;
    }
  };

  return dfs(0, 0, 0);
};

module.exports = minimumDeleteSum;
