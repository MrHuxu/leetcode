var rangeBitwiseAnd = function(m, n) {
  var result = 0;

  while (m != n) {
    m >>= 1;
    n >>= 1;
    ++result;
  }

  return m << result;
};

console.log(rangeBitwiseAnd(600000000, 2311111111));