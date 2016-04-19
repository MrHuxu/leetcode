var isPowerOfTwo = function(n) {
  return n > 0 && !(n & (n - 1));
};

console.log(isPowerOfTwo(23));console.log(isPowerOfTwo(1));console.log(isPowerOfTwo(20));