/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  let times = nums.reduce((pre, curr) => {
    pre[curr] = pre[curr] === undefined ? 1 : ++pre[curr];
    return pre;
  }, {});

  let result = 0;
  let keys = Object.keys(times).map(key => parseInt(key)).sort((a, b) => a > b ? 1 : -1);
  for (let i = 0; i < keys.length - 1; ++i) {
    if (times[keys[i] + 1]) {
      result = Math.max(result, times[keys[i]] + times[keys[i] + 1]);
    }
  }
  return result;
};

console.log(findLHS([1,3,2,2,5,2,3,7]));
console.log(findLHS([1,1, 1, 1]));
console.log(findLHS([1,2, 2, 1]));
console.log(findLHS([1,3,5,7,9,11,13,15,17]));
console.log(findLHS([2,2,2,2,2,2,2,3,1,0,0,0,3,1,-1,0,1,1,0,0,1,1,2,2,2,0,1,2,2,3,2]));
