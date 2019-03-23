/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
let powerfulIntegers = function(x, y, bound) {
  if (bound < 2) return [];
  const used = {}, result = [];
  for (let i = 0; Math.pow(x, i) <= bound; i++) {
    for (let j = 0; Math.pow(x, i) + Math.pow(y, j) <= bound; j++) {
      const sum = Math.pow(x, i) + Math.pow(y, j);
      if (!used[sum]) result.push(sum);
      used[sum] = true;

      if (j !== 0 && 1 === Math.pow(y, j)) break;
    }
    
    if (i !== 0 && 1 === Math.pow(x, i)) break;
  }

  return result;
};

module.exports = powerfulIntegers;