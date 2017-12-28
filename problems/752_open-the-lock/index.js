/**
 * Problem: https://leetcode.com/problems/open-the-lock/description/
 */

const openTheLock = (deadends, target) => {
  const visited = deadends.reduce((pre, str) => {
    pre[str] = true;
    return pre;
  }, {});
  const moves = {
    '0' : ['9', '1'],
    '1' : ['0', '2'],
    '2' : ['1', '3'],
    '3' : ['2', '4'],
    '4' : ['3', '5'],
    '5' : ['4', '6'],
    '6' : ['5', '7'],
    '7' : ['6', '8'],
    '8' : ['7', '9'],
    '9' : ['8', '0']
  };

  let level = ['0000'], flag = false, step = 0;
  while (level.length && !flag) {
    const nextLevel = [];
    for (str of level) {
      if (str === target) {
        flag = true;
        break;
      } else if (!visited[str]) {
        visited[str] = true;

        nextLevel.push(
          moves[str[0]][0] + str[1] + str[2] + str[3], moves[str[0]][1] + str[1] + str[2] + str[3],
          str[0] + moves[str[1]][0] + str[2] + str[3], str[0] + moves[str[1]][1] + str[2] + str[3],
          str[0] + str[1] + moves[str[2]][0] + str[3], str[0] + str[1] + moves[str[2]][1] + str[3],
          str[0] + str[1] + str[2] + moves[str[3]][0], str[0] + str[1] + str[2] + moves[str[3]][1]
        );
      }
    }

    if (flag) break;
    step++;
    level = nextLevel;
  }

  return flag ? step : -1;
};

module.exports = openTheLock;
