var nums = [1, 3, 8];

var permute = function (nums) {
  var used = nums.map(function() { return false; });
  var result = [], tmp1, tmp2, n = nums.length;
  var dfs = function (arr, used) {
    if (arr.length === nums.length)
      result.push(arr);
    else {
      for (var i = 0; i < n; ++i) {
        if (false === used[i]) {
          tmp1 = arr.slice(0);
          tmp1.push(nums[i]);
          tmp2 = used.slice(0);
          tmp2[i] = true;
          dfs(tmp1, tmp2);
        }
      }
    }
  };
  dfs([], used);
  return result;
};

console.log(permute(nums));
