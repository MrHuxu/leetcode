/**
 * Problem: https://leetcode.com/problems/top-k-frequent-elements/description/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var frequence = {}, list = [undefined], result = [];
  var i, len, tmp;

  nums.forEach(num => {
    if (frequence[num]) {
      ++frequence[num];
    } else {
      frequence[num] = 1;
      list.push(num);
    }
  });

  while (k--) {
    for (i = parseInt(list.length / 2); i >= 1; --i) {
      if (list[i * 2 + 1] && frequence[list[i * 2 + 1]] >= frequence[list[i]]) {
        tmp = list[i * 2 + 1];
        list[i * 2 + 1] = list[i];
        list[i] = tmp;
      }
      
      if (frequence[list[i * 2]] >= frequence[list[i]]) {
        tmp = list[i * 2];
        list[i * 2] = list[i];
        list[i] = tmp;
      }
    }
    
    result.push(list[1]);
    list.shift();
  }
  
  return result;
};
module.exports = topKFrequent;
