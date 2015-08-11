var nums = [1, 0, -1, -1, -1, 3, 0, -2, 2, 0, 0, 0];

var fourSum = function (nums) {
  var result = [], map = {}, i, j, k, l, tmp, left, right;
  for (i = 0, l = nums.length; i < l; ++i) {
    if (map[nums[i]])
      map[nums[i]].push(i);
    else
      map[nums[i]] = [i];
  }
  nums.sort(function (a, b) {
    return a < b ? -1 : 1;
  });
  for (i = 0; i < l - 3; ++i) {
    for (j = i + 1; j < l - 2; ++j) {
      for (left = j + i, right = l -1; left < right;) {
        tmp = nums[i] + nums[j] + nums[left] + nums[right];
        if (tmp === 0) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          while (nums[left + 1] === nums[left]) ++left;
          while (nums[right - 1] === nums[right]) --right;
          ++left;
          --right;
        } else if (tmp > 0) {
          while (nums[right - 1] === nums[right]) --right;
          --right;
        } else {
          while (nums[left + 1] === nums[left]) ++left;
          ++left;
        }
      }
      while (nums[j + 1] === nums[j]) ++j;
    }
    while (nums[i + 1] === nums[i]) ++i;
  }
  return result;
};

console.log(fourSum(nums));
