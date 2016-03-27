/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  var res = [0];

  for (var i = 0; i < n; i++) {
    for (var j = res.length - 1; j >= 0; j--) {
      res.push(res[j] + (1 << i));
    }
  }

  return(res);
};

console.log(grayCode(1));
console.log(grayCode(2));
console.log(grayCode(3));
