/**
 * Problem: https://leetcode.com/problems/walking-robot-simulation/description/
 */

const walkingRobotSimulation = (commands, obstacles) => {
  const obstaclesMap = {};
  for (let obstacle of obstacles) {
    if (!obstaclesMap[obstacle[0]]) obstaclesMap[obstacle[0]] = {};
    obstaclesMap[obstacle[0]][obstacle[1]] = true;
  }

  const move = (pos, steps, dir) => {
    for (let i = 0; i < steps; i++) {
      switch(dir) {
      case 0:
        if (obstaclesMap[pos[0]] && obstaclesMap[pos[0]][pos[1] + 1]) return;
        pos[1]++;
        break;

      case 1:
        if (obstaclesMap[pos[0] + 1] && obstaclesMap[pos[0] + 1][pos[1]]) return;
        pos[0]++;
        break;

      case 2:
        if (obstaclesMap[pos[0]] && obstaclesMap[pos[0]][pos[1] - 1]) return;
        pos[1]--;
        break;

      case 3:
        if (obstaclesMap[pos[0] - 1] && obstaclesMap[pos[0] - 1][pos[1]]) return;
        pos[0]--;
        break;
      } 
    }
  };

  const pos = [0, 0];
  let currDirection = 0, res = 0;
  const directions = [
    { '-2': 3, '-1': 1 },
    { '-2': 0, '-1': 2 },
    { '-2': 1, '-1': 3 },
    { '-2': 2, '-1': 0 },
  ];
  for (let command of commands) {
    if (-1 === command || -2 === command) {
      currDirection = directions[currDirection][command];
    } else {
      move(pos, command, currDirection);
    }
    res = Math.max(res, pos[0] * pos[0] + pos[1] * pos[1]);
  }

  return res;
};

module.exports = walkingRobotSimulation;
