var isPerfectSquare = function(num) {
  var flag = false, head = 1, tail = num;
  while (head < tail) {
    var mid = parseInt((head + tail) / 2);
    if (mid * mid < num) {
      head = mid + 1;
    } else if (mid * mid > num) {
      tail = mid - 1;
    } else {
      flag = true;
      break;
    }
  }
  return flag || head * head === num;
};

console.log(isPerfectSquare(1));
console.log(isPerfectSquare(4));
console.log(isPerfectSquare(9));
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(25));
console.log(isPerfectSquare(17));
console.log(isPerfectSquare(18));
console.log(isPerfectSquare(19));
console.log(isPerfectSquare(14));