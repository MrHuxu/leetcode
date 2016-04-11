var convertToTitle = function(n) {
  var result = [];
  while (n > 26) {
    if (n % 26 === 0) {
      result.unshift(90);
      n = n / 26 - 1;
      break;
    } else {
      result.unshift(n % 26 + 64);
      n = parseInt(n / 26);
    }
  }
  result.unshift(n + 64);

  return String.fromCharCode.apply(null, result);
};


console.log(convertToTitle(52));
console.log(convertToTitle(1));
console.log(convertToTitle(2));
console.log(convertToTitle(26));
console.log(convertToTitle(27));
console.log(convertToTitle(29));