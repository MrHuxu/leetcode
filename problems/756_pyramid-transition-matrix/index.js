/**
 * Problem: https://leetcode.com/problems/pyramid-transition-matrix/description/
 */

const pyramidTransitionMatrix = (bottom, allowed) => {
  const allowedObj = allowed.reduce((pre, str) => {
    const key = str[0] + str[1];
    pre[key] = pre[key] ? [...pre[key], str[2]] : [str[2]];
    return pre;
  }, {});

  let flag = false;
  const dfs = str => {
    if (1 === str.length) {
      flag = true;
      return;
    } else if (!flag) {
      let arr;
      for (let i = 0; i < str.length - 1; i++) {
        const key = str[i] + str[i + 1];
        if (allowedObj[key]) {
          arr = arr ? arr.reduce((pre, curr) => {
            pre.push(...allowedObj[key].map(v => curr + v));
            return pre;
          }, []) : allowedObj[key];
        } else {
          return;
        }
      }
      if (arr) arr.forEach(dfs);
    }
  };
  dfs(bottom);

  return flag;
};

module.exports = pyramidTransitionMatrix;
