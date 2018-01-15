/**
 * Problem: https://leetcode.com/problems/partition-labels/description/
 */

const partitionLabels = S => {
  const phases = {};
  for (let i = 0; i < S.length; i++) {
    const ch = S[i];
    if (phases[ch])
      phases[ch].to = i;
    else
      phases[ch] = { from: i, to: i };
  }

  const res = [];
  let start = 0, end = 0;
  for (let i = 0; i < S.length; i++) {
    const ch = S[i];
    const { from, to } = phases[ch];
    
    if (from >= start && from <= end) {
      end = Math.max(end, to);
    } else {
      res.push(end - start + 1);
      start = from;
      end = to;
    }
  }
  res.push(end - start + 1);
  return res;
};

module.exports = partitionLabels;
