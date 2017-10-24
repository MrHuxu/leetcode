/**
 * Problem: https://leetcode.com/problems/ransom-note/description/
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  var rPairs = {}, mPairs = {}, flag = true, i;
  for (i = 0; i < ransomNote.length; ++i) {
    rPairs[ransomNote[i]] = rPairs[ransomNote[i]] ? ++rPairs[ransomNote[i]] : 1;
  }
  for (i = 0; i < magazine.length; ++i) {
    mPairs[magazine[i]] = mPairs[magazine[i]] ? ++mPairs[magazine[i]] : 1;
  }

  for (var key in rPairs) {
    if (!mPairs[key] || rPairs[key] > mPairs[key]) {
      flag = false;
      break;
    }
  }

  return flag;
};

module.exports = canConstruct;
