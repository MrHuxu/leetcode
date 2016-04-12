var trailingZeroes = function(n) {
  var result = 0;

  while (n > 0) {
    n = parseInt(n / 5);
    result += n;
  }

  return result;
};

console.log(trailingZeroes(5));
console.log(trailingZeroes(19));
console.log(trailingZeroes(10));
console.log(trailingZeroes(50));