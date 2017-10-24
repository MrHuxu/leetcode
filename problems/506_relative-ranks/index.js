/**
 * Problem: https://leetcode.com/problems/relative-ranks/description/
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
  var seqs = [], result = [];
  for (var i = 0; i < nums.length; ++i) seqs.push(i);

  seqs.sort(function (seq1, seq2) {
    return nums[seq1] > nums[seq2] ? -1 : 1;
  });
  result[seqs[0]] = 'Gold Medal';
  result[seqs[1]] = 'Silver Medal';
  result[seqs[2]] = 'Bronze Medal';
  for (var i = 3; i < seqs.length; ++i) {
    result[seqs[i]] = (i + 1).toString();
  }

  return result;
};

module.exports = findRelativeRanks;
