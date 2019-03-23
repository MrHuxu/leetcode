/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
let numsSameConsecDiff = function(N, K) {
  const result = [];
  const traverse = (sum, num, times) => {
    if (!times) {
      result.push(sum);
      return;
    }

    const num1 = num - K;
    if (num1 >= 0 && num1 <= 9) {
      traverse(sum * 10 + num1, num1, times - 1);
    }

    const num2 = num + K;
    if (num2 !== num1 && num2 >= 0 && num2 <= 9) {
      traverse(sum * 10 + num2, num2, times - 1);
    }
  };
  for (let i = (1 === N) ? 0 : 1; i <= 9; i++) {
    traverse(i, i, N - 1);
  }

  return result;
};

module.exports = numsSameConsecDiff;