var containsDuplicate = function(nums) {
  var visited = {}, flag = false;
  
  for (var i = 0, len = nums.length; i < len; ++i) {
    if (!visited[nums[i]])
      visited[nums[i]] = true;
    else {
      flag = true;
      break;
    }
  }
  
  return flag;
};

console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 2, 2, 4]));