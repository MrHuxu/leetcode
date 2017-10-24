/**
 * Problem: https://leetcode.com/problems/subarray-product-less-than-k/description/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  return nums.reduce((prev, num) => {
    let dp = new Map(), { dp: prevDp, count } = prev;

    const keyIt = prevDp.keys();
    let key = keyIt.next();

    while (!key.done) {
      const prd = key.value * num;
      const inc = prevDp.get(key.value);
      if (prd < k) {
        dp.set(prd, inc);
        count += inc;
      }
      key = keyIt.next();
    }

    if (num < k) {
      dp.set(num, dp.has(num) ? dp.get(num) + 1 : 1);
      count += 1;
    }

    return { dp, count };
  }, { dp: new Map(), count: 0 }).count;
};

module.exports = numSubarrayProductLessThanK;
