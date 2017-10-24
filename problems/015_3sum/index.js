/**
 * Problem: https://leetcode.com/problems/3sum/description/
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  var result = [], map = {}, tmp, left, right;
  for (var i = 0, l = nums.length; i < l; ++i) {
    if (map[nums[i]])
      map[nums[i]].push(i);
    else
      map[nums[i]] = [i];
  }
  nums.sort(function (a, b) {
    return parseInt(a) < parseInt(b) ? -1 : 1;
  });
  for (i = 0; i < l - 2; ++i) {
    for (left = i + 1, right = l - 1; left < right;) {
      tmp = nums[i] + nums[left] + nums[right];
      if (0 === tmp) {
        while (nums[left + 1] === nums[left]) ++left;
        while (nums[right - 1] === nums[right]) --right;
        result.push([nums[i], nums[left], nums[right]]);
        ++left;
        --right;
      } else if (tmp > 0) {
        --right;
      } else {
        ++left;
      }
    }

    while (nums[i + 1] === nums[i]) ++i;
  }
  result.sort(function (a, b) {
    var seqa = seqb = [];
    if (a[0] === a[2])
      seqa = [map[a[0]][0], map[a[1]][1], map[a[2]][2]];
    else if (a[0] === a[1])
      seqa = [map[a[0]][0], map[a[1]][1], map[a[2]][0]];
    else if (a[1] === a[2])
      seqa = [map[a[0]][0], map[a[1]][0], map[a[2]][1]];
    else
      seqa = [map[a[0]][0], map[a[1]][0], map[a[2]][0]];
    seqa.sort();

    if (b[0] === b[2])
      seqb = [map[b[0]][0], map[b[1]][1], map[b[2]][2]];
    else if (b[0] === b[1])
      seqb = [map[b[0]][0], map[b[1]][1], map[b[2]][0]];
    else if (b[1] === b[2])
      seqb = [map[b[0]][0], map[b[1]][0], map[b[2]][1]];
    else
      seqb = [map[b[0]][0], map[b[1]][0], map[b[2]][0]];
    seqb.sort();

    var i = 0;
    while (seqa[i] === seqb[i]) ++i;
    return seqa[i] < seqb[i] ? -1 : 1;
  });
  return result;
};

module.exports = threeSum;
