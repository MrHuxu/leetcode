var countBits = function(num) {
  var result = [0], pow;
  
  for (var i = 1; i <= num; ++i) {
    if (i & (i - 1)) {
      result.push(result[i - pow] + 1);
    } else {
      pow = i;
      result.push(1);
    }
  }
  
  return result;
};

console.log(countBits(5));
// console.log(countBits(6));
// console.log(countBits(0));
// console.log(countBits(234));
// console.log(countBits(123456));
