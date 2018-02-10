/**
 * Problem: https://leetcode.com/problems/swap-adjacent-in-lr-string/description/
 */

const swapAdjacentInLrString = (start, end) => {
  if (start.length !== end.length) return false;

  let sL = eL = sR = eR = 0;
  for (let i = 0; i < start.length; i++) {
    if ('R' === start[i]) sR++;
    if ('R' === end[i]) eR++;
    if (sR < eR) return false;
  }
  if (sR !== eR) return false;
  for (let i = start.length - 1; i >= 0; i--) {
    if ('L' === start[i]) sL++;
    if ('L' === end[i]) eL++;
    if (sL < eL) return false;
  }
  if (sL !== eL) return false;

  sArr = start.replace(/X/g, '').split('R');
  eArr = end.replace(/X/g, '').split('R');
  if (sArr.length !== eArr.length) return false;
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== eArr[i]) return false;
  }
  return true;
};

module.exports = swapAdjacentInLrString;
