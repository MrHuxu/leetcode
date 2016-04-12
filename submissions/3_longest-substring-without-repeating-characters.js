/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var maxLen = 0, numArr = [], index;
  for (var i = 0; i < s.length; i++) {
    index = numArr.indexOf(s[i]);
    if (index !== -1) {
      numArr = numArr.slice(index + 1, numArr.length);
    }
    numArr.push(s[i]);
    maxLen = numArr.length > maxLen ? numArr.length : maxLen;
  }
  return maxLen;
};