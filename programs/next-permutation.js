var nums = [1, 2];

var nextPermutation = function (nums) {
  if (2 === nums.length) {
    if (nums[1] > nums[0])
      nums.reverse();
  } else if (nums.length > 2) {
    var tmp, flag = false, bigger;
    for (var i = 1; i < nums.length - 1; ++i) {
      if (nums[i] < nums[i + 1]) {
        tmp = nums[i + 1];
        nums[i + 1] = nums[i];
        nums[i] = tmp;
        flag = true;
        break;
      }
    }
    if (!flag) {
      if (nums[0] >= nums[1]) {
        nums.sort(function (a, b) {
          return a < b ? -1 : 1;
        });
      } else {
        tmp = nums[0];
        for (i = 1; i < nums.length; ++i) {
          if (nums[i] > tmp && (!nums[i + 1] || nums[i + 1] <= tmp))
            bigger = nums[i];
        }
        nums.sort(function (a, b) {
          return a < b ? -1 : 1;
        });
        for (i = 1; nums[i] !== bigger; ++i) {
          nums[i] = nums[i - 1];
        }
        nums[0] = bigger;
        nums[i] = tmp;
      }
    }
  }
};

nextPermutation(nums);
console.log(nums);
