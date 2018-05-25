/**
 * Problem: https://leetcode.com/problems/find-and-replace-in-string/description/
 */

const findAndReplaceInString = (S, indexes, sources, targets) => {
  const judge = (i, s, t) => {
    for (let j = 0; j < s.length; j++) {
      if (s[j] !== S[i + j]) return null;
    }
    return [s, t];
  };

  const arr = [];
  for (let i = 0; i < indexes.length; i++) {
    const index = indexes[i], source = sources[i], target = targets[i];
    arr[index] = judge(index, source, target);
  }

  let result = '';
  for (let i = 0; i < S.length; i++) {
    let res = arr[i];
    if (res) {
      result += res[1];
      i += res[0].length - 1;
    } else {
      result += S[i];
    }
  }
  return result;
};

module.exports = findAndReplaceInString;
