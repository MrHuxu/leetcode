var increasingTriplet = function(nums) {
  var preMin = nums[0], postMax = Math.max.apply(null, nums.slice(2)), flag = false;
  
  if (nums.length < 3) return flag;

  for (var i = 1, len = nums.length; i < len - 1; ++i) {
    if (nums[i] > preMin && nums[i] < postMax) {
      flag = true;
      break;
    }

    if (nums[i] < preMin) preMin = nums[i];
    if (nums[i + 1] === postMax) postMax = Math.max.apply(null, nums.slice(i + 2));
  }

  return flag;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]))
console.log(increasingTriplet([5, 4, 3, 2, 1]))
console.log(increasingTriplet([1, 5, 3, 4, 5]))
