/**
 * Problem: https://leetcode.com/problems/multiply-strings/description/
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  const arr1 = num1.split('').map(ch => ch.charCodeAt() - 48);
  const arr2 = num2.split('').map(ch => ch.charCodeAt() - 48);
  const base = [], result = [];
  for (let i = arr2.length - 1; i >= 0; i--) {
    const num2 = arr2[i];
    if (num2) {
      let plus = 0, tmp = base.slice(), flag = false;
      for (let j = arr1.length - 1; j >= 0; j--) {
        const num1 = arr1[j];
        const prod = num1 * num2 + plus;
        if (prod) flag = true;
        tmp.push(prod % 10);
        plus = Math.floor(prod / 10);
      }
      if (flag) {
        if (plus > 0) tmp.push(plus);
        result.push(tmp);
      }
    }
    base.push(0);
  }

  let plus = 0, prod = [];
  for (let i = 0; true; i++) {
    let flag = false, sum = plus;
    result.forEach(line => {
      if (line[i] !== undefined) {
        flag = true;
      }
      sum += line[i] || 0;
    });
    if (!flag) break;
    prod.push(sum % 10);
    plus = Math.floor(sum / 10);
  }
  if (plus || !prod.length) prod.push(plus);

  return prod.reverse().map(num => num + '').join('');
};

module.exports = multiply;
