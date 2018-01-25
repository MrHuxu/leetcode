/**
 * Problem: https://leetcode.com/problems/max-chunks-to-make-sorted/description/
 */

const maxChunksToMakeSorted = arr => {
  let limit = 0, result = 0;
  for (let i = 0; i < arr.length; i++) {
    limit = Math.max(limit, arr[i]);
    if (limit === i) {
      result++;
      limit = i + 1;
    }
  }
  return result;
};

module.exports = maxChunksToMakeSorted;
