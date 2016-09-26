var integerReplacement = function(n) {
  var arr = [0, 0, 1, 2];

  if (n <= 3) {
    return arr[n];
  } else {
    for (var i = 4; i <= n; ++i) {
      if (i % 2 === 0) {
        arr[i] = arr[i / 2] + 1;
      } else {
        arr[i] = Math.min(arr[i - 1] + 1, arr[(i + 1) / 2] + 2);
      }
    }
  }

  return arr[n];
};

console.log(integerReplacement(1));
console.log(integerReplacement(2));
console.log(integerReplacement(3));
console.log(integerReplacement(4));
console.log(integerReplacement(7));
console.log(integerReplacement(8));