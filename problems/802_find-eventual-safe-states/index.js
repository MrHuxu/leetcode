/**
 * Problem: https://leetcode.com/problems/find-eventual-safe-states/description/
 */

const findEventualSafeStates = graph => {
  let terminals = [];
  const graphObj = graph.reduce((pre, curr, i) => {
    if (!curr.length) {
      terminals.push(i);
      return pre;
    } else {
      pre[i] = curr.reduce((p, c) => {
        p[c] = true;
        return p;
      }, {});
      return pre;
    }
  }, {});

  const result = [];
  while (terminals.length) {
    result.push(...terminals);
    const nextTerminals = [];

    for (let terminal of terminals) {
      for (let node in graphObj) delete graphObj[node][terminal];
    }

    for (let node in graphObj) {
      for (let terminal of terminals) delete graphObj[node][terminal];
      if (!Object.keys(graphObj[node]).length) {
        delete graphObj[node];
        nextTerminals.push(parseInt(node));
      }
    }
    terminals = nextTerminals;
  }

  return result.sort((a, b) => a < b ? -1 : 1);
};

module.exports = findEventualSafeStates;
