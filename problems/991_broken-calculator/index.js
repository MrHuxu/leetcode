/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
let brokenCalc = function(X, Y) {
  let result = 0;
  while (Y > X) {
    if (0 === Y % 2) {
      Y /= 2;
    } else {
      Y++;
    }
    
    result++;
  }
  result += X - Y;

  return result;
};

module.exports = brokenCalc;