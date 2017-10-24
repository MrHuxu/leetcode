/**
 * Problem: https://leetcode.com/problems/maximum-product-subarray/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  var maxPos, minNeg, tmp;
  var result = nums[0];

  for (var i = 0, l = nums.length; i < l; ++i) {
    if (0 === nums[i]) {
      result = Math.max(result, 0);
      maxPos = minNeg = undefined;
    } else {
      if (nums[i] > 0) {
        maxPos = maxPos === undefined ? nums[i] : maxPos * nums[i];
        minNeg = minNeg === undefined ? minNeg : minNeg * nums[i];
      } else if (nums[i] < 0) {
        tmp = maxPos;
        maxPos = minNeg === undefined ? minNeg : minNeg * nums[i];
        minNeg = tmp === undefined ? nums[i] : tmp * nums[i];
      }
      var tmpArr = [result];
      if (maxPos !== undefined) tmpArr.push(maxPos);
      if (minNeg !== undefined) tmpArr.push(minNeg);
      result = Math.max.apply(null, tmpArr);
    }
  }

  return result;
};
module.exports = maxProduct;
