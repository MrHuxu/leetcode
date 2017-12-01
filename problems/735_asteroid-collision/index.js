/**
 * Problem: https://leetcode.com/problems/asteroid-collision/description/
 */
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  let changed = true, result = asteroids;
  while (changed) {
    changed = false;
    const nextResult = [];
    for (let i = 0; i < result.length; i++) {
      const left = result[i], right = result[i + 1];
      if (left > 0 && right !== undefined && right < 0) {
        changed = true;
        i++;
        if (left > -right) nextResult.push(left);
        else if (left < -right) nextResult.push(right);
      } else {
        nextResult.push(left);
      }
    }
    result = nextResult;
  }

  return result;
};

module.exports = asteroidCollision;
