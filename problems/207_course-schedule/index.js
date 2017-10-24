/**
 * Problem: https://leetcode.com/problems/course-schedule/description/
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const graph = prerequisites.reduce((prev, curr) => {
    prev[curr[0]] = prev[curr[0]] ? [...prev[curr[0]], curr[1]] : [curr[1]];
    return prev;
  }, {});

  let onStack = {};
  let marked = {};
  let flag = true;

  const dfs = v => {
    onStack[v] = true;
    marked[v] = true;
    if (graph[v]) {
      for (let w of graph[v]) {
        if (!flag) return;
        else if (!marked[w]) dfs(w);
        else if (onStack[w]) {
          flag = false;
          return;
        }
      }
    }
    onStack[v] = false;
  };

  Object.keys(graph).forEach(v => {
    if (flag && !marked[v]) {
      dfs(v);
    }
  });

  return flag;
};
module.exports = canFinish;
