var nums = [0, 1, 2, 4, 5, 7];

var summaryRanges = function (nums) {
  var result = [];
  for (var i = 0, l = nums.length; i < l;) {
    if (i === l - 1) {
      result.push(nums[i].toString());
      break;
    } else {
      for (var j = i + 1; j < l;) {
        if (nums[j] - nums[j - 1] === 1)
          j++;
        else
          break;
      }
      if (j === i + 1) {
        result.push(nums[i].toString());
      } else {
        result.push(nums[i] + '->' + nums[j - 1]);
      }
      i = j;
    }
    console.log(i);
  }
  return result;
};

console.log(summaryRanges(nums));
