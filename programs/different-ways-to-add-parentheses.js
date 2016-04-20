var diffWaysToCompute = function(input) {
  var tmp1, tmp2, result = [];
  
  var calc = function (operator, nums) {
    switch (operator) {
    case '+':
      return nums[1] + nums[2];
    case '-':
      return nums[1] - nums[2];
    case '*':
      return nums[1] * nums[2];
    }
  };

  return result;
};

console.log(diffWaysToCompute('2-1-1'));
console.log(diffWaysToCompute("2*3-4*5"));