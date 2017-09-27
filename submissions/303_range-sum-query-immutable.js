/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.data = nums;
  this.sums = [];
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
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.sums[j] - this.sums[i] + this.data[i];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */