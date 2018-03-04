/**
 * Problem: https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/description/
 */

const numberOfSubarraysWithBoundedMaximum = (A, L, R) => {
  let result = 0;
  const remain = A.reduce((pre, curr, i) => {
    if (curr > R) {
      result += pre;
      return 0;
    } else {
      if (curr < L) {
        result += pre;
        return pre;
      } else {
        result += pre;

        let tmp = 1;
        i--;
        while (i >= 0 && A[i] < L) {
          tmp++;
          i--;
        }

        return pre + tmp;
      }
    }
  }, 0);
  return result + remain;
};

module.exports = numberOfSubarraysWithBoundedMaximum;
