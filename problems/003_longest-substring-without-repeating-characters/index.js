/**
 * Problem: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */
/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = s => {
  let maxLen = 0, subArr = [], index;
  for (let i = 0; i < s.length; i++) {
    index = subArr.indexOf(s[i]);
    if (index !== -1) {
      subArr = subArr.slice(index + 1, subArr.length);
    }
    subArr.push(s[i]);
    maxLen = Math.max(maxLen, subArr.length);
  }
  return maxLen;
};
module.exports = lengthOfLongestSubstring;
