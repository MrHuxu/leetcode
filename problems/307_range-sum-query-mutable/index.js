/**
 * Problem: https://leetcode.com/problems/range-sum-query-mutable/description/
 */
/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.data = nums;
  this.sums = [];
  this.updateCache = [];
  var i, len = nums.length;
  for (i = 0; i < len; ++i) {
    if (this.sums[i - 1] === undefined)
      this.sums[i] = nums[i];
    else
      this.sums[i] = nums[i] + this.sums[i - 1];
  }
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
  this.updateCache.push({
    pos   : i,
    value : val - this.data[i]
  });
  this.data[i] = val;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  var result = this.sums[j] - this.sums[i] + this.data[i];
  var k, len = this.updateCache.length;
  for (k = 0; k < len; ++k) {
    if (i < this.updateCache[k].pos && this.updateCache[k].pos <= j) result += this.updateCache[k].value;
  }
  return result;
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.update(1, 10);
 * numArray.sumRange(0, 2);
 */
module.exports = NumArray;
