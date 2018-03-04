/**
 * Problem: https://leetcode.com/problems/escape-the-ghosts/description/
 */

const escapeTheGhosts = (ghosts, target) => {
  const { abs } = Math;
  const dis = abs(target[0]) + abs(target[1]);

  for (let ghost of ghosts) {
    const gDis = abs(ghost[0] - target[0]) + abs(ghost[1] - target[1]);
    if (gDis <= dis) return false;
  }
  return true;
};

module.exports = escapeTheGhosts;
