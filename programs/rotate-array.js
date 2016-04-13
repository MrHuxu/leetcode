var rotate = function(nums, k) {
  k = k % nums.length;
  Array.prototype.unshift.apply(nums, nums.splice(nums.length - k, k));
};

rotate([1, 2, 3, 4, 5, 6], 2)