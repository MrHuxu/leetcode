var moveZeroes = function(nums) {
  var pos1, pos2, tmp, i, len = nums.length;

  for (i = 0; i < len; ++i) {
    if (nums[i] === 0) {
      pos1 = pos2 = i;
      break;
    }
  }

  while (true) {
    while (nums[pos2] === 0) ++pos2;
    if (pos2 === len) break;

    tmp = nums[pos1];
    nums[pos1] = nums[pos2];
    nums[pos2] = tmp;

    while (nums[pos1] !== 0) ++pos1;
  }
};

console.log(moveZeroes([0, 1, 0, 2, 0, 4, 0, 3]));
