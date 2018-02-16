/**
 * Problem: https://leetcode.com/problems/rabbits-in-forest/description/
 */

const rabbitsInForest = answers => {
  let res = 0;
  const times = {};

  for (let answer of answers) {
    const count = answer + 1;
    times[count] = times[count] ? times[count] + 1 : 1;
    
    if (times[count] === count) {
      res += count;
      delete times[count];
    }
  }
  res = Object.keys(times).reduce((pre, time) => pre += parseInt(time), res);

  return res;
};

module.exports = rabbitsInForest;
