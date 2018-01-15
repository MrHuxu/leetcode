/**
 * Problem: https://leetcode.com/problems/partition-labels/description/
 */

const partitionLabels = S => {
  const phases = Array.from(S).reduce((pre, ch, i) => {
    pre[ch] = pre[ch] ? { ...pre[ch], to: i } : { from: i, to: i };
    return pre;
  }, {});

  const res = [];
  let start = 0, end = 0;
  for (let i = 0; i < S.length; i++) {
    const { from, to } = phases[S[i]];
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
