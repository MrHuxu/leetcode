/**
 * Problem: https://leetcode.com/problems/group-anagrams/description/
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var location = {}, result = [];
  strs.forEach(function(str) {
    var sortedStr = str.split('').sort().join('');
    if (location[sortedStr] === undefined) {
      result.push([str]);
      location[sortedStr] = result.length - 1;
    } else {
      result[location[sortedStr]].push(str);
    }
  });

  return result;
};
module.exports = groupAnagrams;
