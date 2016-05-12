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

NumArray.prototype.update = function(i, val) {
  this.updateCache.push({
    pos: i,
    value: val - this.data[i]
  });
  this.data[i] = val;
};

NumArray.prototype.sumRange = function(i, j) {
  var result = this.sums[j] - this.sums[i] + this.data[i];
  var k, len = this.updateCache.length;
  for (k = 0; k < len; ++k) {
    if (i < this.updateCache[k].pos && this.updateCache[k].pos <= j) result += this.updateCache[k].value;
  }
  return result;
};

var numArr = new NumArray([1, 3, 5]);
console.log(numArr.sumRange(0, 2));
numArr.update(1, 2);
console.log(numArr.sumRange(0, 2));

numArr = new NumArray([-1]);
console.log(numArr.sumRange(0, 0));
numArr.update(0, 1);
console.log(numArr.sumRange(0, 0));