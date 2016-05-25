var isPowerOfThree = function(n) {
  while (n > 1) {
    if (n % 3)
      break;
    else
      n /= 3
  }
  
  return n === 1;
};

console.log(isPowerOfThree(243));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(3));
console.log(isPowerOfThree(4));
