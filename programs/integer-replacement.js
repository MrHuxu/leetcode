var integerReplacement = function(n) {
  if (n <= 3) {
    return n - 1;
  } else {
    if (0 === n % 2) {
      return integerReplacement(n / 2) + 1;
    } else {
      return Math.min(integerReplacement(n - 1) + 1, integerReplacement(n + 1) + 1);
    }
  }
};

console.log(integerReplacement(1));
console.log(integerReplacement(2));
console.log(integerReplacement(3));
console.log(integerReplacement(4));
console.log(integerReplacement(7));
console.log(integerReplacement(8));