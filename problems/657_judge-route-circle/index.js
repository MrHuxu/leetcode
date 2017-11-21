/**
 * Problem: https://leetcode.com/problems/judge-route-circle/description/
 */
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let x = 0, y = 0;
  const funcs = {
    U : () => y++,
    D : () => y--,
    L : () => x--,
    R : () => x++
  };
  for (let i = 0; i < moves.length; i++) {
    funcs[moves[i]].call();
  }

  return 0 === x && 0 === y;
};

module.exports = judgeCircle;
