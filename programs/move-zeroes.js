var moveZeroes = function(nums) {
  var pos1, pos2, tmp, i, len = nums.length;

  for (i = 0; i < len; ++i) {
    if (0 === nums[i]) {
      pos1 = pos2 = i;
      break;
    }
  }

  while (true) {
    while (0 === nums[pos2]) ++pos2;
    if (pos2 === len) break;

    tmp = nums[pos1];
    nums[pos1] = nums[pos2];
    nums[pos2] = tmp;

    while (nums[pos1] !== 0) ++pos1;
  }
};

moveZeroes([0, 1, 0, 2, 0, 4, 0, 3]);
