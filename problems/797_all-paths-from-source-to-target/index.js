/**
 * Problem: https://leetcode.com/problems/all-paths-from-source-to-target/description/
 */

const allPathsFromSourceToTarget = graph => {
  const map = graph.reduce((pre, curr, i) => {
    pre[i] = curr;
    return pre;
  }, {});

  const result = [];
  const traverse = (i, arr) => {
    if (i === graph.length - 1) {
      result.push([...arr, i]);
      return;
    }
    if (map[i] && !map[i].length) return;

    for (let next of map[i]) {
      traverse(next, [...arr, i]);
    }
  };
  traverse(0, []);
  return result;
};

module.exports = allPathsFromSourceToTarget;
