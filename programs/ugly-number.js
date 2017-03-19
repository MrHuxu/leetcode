var isUgly = function(num) {
  if (!num) return false;
  while (true) {
    if (0 === num % 2) {
      num /= 2;
    } else if (0 === num % 3) {
      num /= 3;
    } else if (0 === num % 5) {
      num /= 5;
    } else {
      break;
    }
  }
  
  return 1 === num;
};

console.log(isUgly(1));
console.log(isUgly(2));
console.log(isUgly(3));
console.log(isUgly(4));
console.log(isUgly(5));
console.log(isUgly(6));
console.log(isUgly(7));
console.log(isUgly(8));
console.log(isUgly(9));
console.log(isUgly(12));
console.log(isUgly(14));
console.log(isUgly(214797179));