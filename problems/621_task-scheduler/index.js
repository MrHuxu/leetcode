/**
 * Problem: https://leetcode.com/problems/task-scheduler/description/
 */

const taskScheduler = (tasks, n) => {
  const times = tasks.reduce((pre, task) => {
    pre[task] = pre[task] ? pre[task] + 1 : 1;
    return pre;
  }, {});
  const chars = Object.keys(times).sort((ch1, ch2) => times[ch1] > times[ch2] ? -1 : 1);

  let result = 0,i = 0;
  for (; i < chars.length; i++) {
    result += times[chars[i]];
    if (result >= tasks.length / (n + 1)) break;
  }
  let j = 0;
  for (++i; i + j < chars.length; j++) {
    if (times[chars[i + j]] !== result) break;
  }
  result += j * result + (result - 1) * (n - j);
  return result;
};

module.exports = taskScheduler;
