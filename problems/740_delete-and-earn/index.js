/**
 * Problem: https://leetcode.com/problems/delete-and-earn/description/
 */

const deleteAndEarn = nums => {
  const numsObj = nums.reduce((pre, num) => {
    pre[num] = pre[num] ? (pre[num] + num) : num;
    return pre;
  }, {});

  const dfs = (obj, sum) => {
    if (!Object.keys(obj).length) {
      return sum;
    } else {
      const arr = Object.keys(obj).reduce((pre, key) => {
        const num = parseInt(key);
        const nextSum = sum + obj[num];
        const nextObj = Object.assign({}, obj);
        delete nextObj[num];
        delete nextObj[num + 1];
        delete nextObj[num - 1];
        pre.push(dfs(nextObj, nextSum));
        return pre;
      }, []);
      return Math.max(...arr);
    }
  };
 
  return dfs(numsObj, 0);
};

module.exports = deleteAndEarn;
