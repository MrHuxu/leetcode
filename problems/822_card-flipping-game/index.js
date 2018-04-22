/**
 * Problem: https://leetcode.com/problems/card-flipping-game/description/
 */

const cardFlippingGame = (fronts, backs) => {
  const useless = [];
  for (let i = 0; i < fronts.length; i++) {
    if (fronts[i] === backs[i]) useless[fronts[i]] = true;
  }

  const stack = [];
  for (let i = 0; i < fronts.length; i++) {
    let [bigger, smaller] = fronts[i] > backs[i] ? [fronts[i], backs[i]] : [backs[i], fronts[i]];
    if (!useless[smaller] && (!stack.length || smaller < stack[stack.length - 1])) {
      stack.push(smaller);
      continue;
    }
    if (!useless[bigger] && (!stack.length || bigger < stack[stack.length - 1])) {
      stack.push(bigger);
    }
  }

  return stack.length ? stack[stack.length - 1] : 0;
};

module.exports = cardFlippingGame;
