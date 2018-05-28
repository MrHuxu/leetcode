/**
 * Problem: https://leetcode.com/problems/split-array-into-fibonacci-sequence/description/
 */

const splitArrayIntoFibonacciSequence = S => {
  const dfs = (arr, i) => {
    if (arr.length < 2) {
      if ('0' === S[i]) {
        return dfs([...arr.slice(), 0], i + 1);
      } else {
        let curr = 0;
        for (; i < S.length; i++) {
          curr = curr * 10 + S[i].charCodeAt() - 48;
          res = dfs([...arr.slice(), curr], i + 1);
          if (res) return res;
        }
      }
    }

    const pre1 = arr[arr.length - 2];
    const pre2 = arr[arr.length - 1];

    if ('0' === S[i]) {
      if (0 === pre1 && 0 === pre2) {
        const nextArr = [...arr.slice(), 0];
        return i === S.length - 1 ? nextArr : dfs(nextArr, i + 1);
      } else {
        return null;
      }
    }

    let curr = 0;
    for (; i < S.length; i++) {
      curr = curr * 10 + S[i].charCodeAt() - 48;
      if (curr > 2147483648 || curr > pre1 + pre2) {
        return null;
      }else if (curr === pre1 + pre2) {
        let nextArr = [...arr.slice(), curr];
        return i === S.length - 1 ? nextArr : dfs(nextArr, i + 1);
      }
    }
    return null;
  };

  return dfs([], 0) || [];
};

module.exports = splitArrayIntoFibonacciSequence;
