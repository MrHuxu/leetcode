var findMin = function(nums) {
  var head = 0, tail = nums.length - 1;
  var mid;

  while (tail - head > 0) {
    mid = parseInt((tail - head) / 2) + head;
    if (nums[mid] >= nums[head] && nums[tail] <= nums[head]) head = mid + 1;
    else tail = mid;
    console.log(head, tail, mid);
  }

  return nums[head];
};

console.log(findMin([2, 1]));
console.log(findMin([4,5,6,7,0,1,2]));
console.log(findMin([3, 5, 7, 12, 34, 0, 1, 2]));