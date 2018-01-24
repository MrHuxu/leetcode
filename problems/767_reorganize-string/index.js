/**
 * Problem: https://leetcode.com/problems/reorganize-string/description/
 */

const reorganizeString = S => {
  const times = {};
  for (let i = 0; i < S.length; i++) {
    const ch = S[i];
    times[ch] = times[ch] ? times[ch] + 1 : 1;
  }
  const chars = Object.keys(times).sort((ch1, ch2) => times[ch1] > times[ch2] ? -1 : 1);
  
  if (times[chars[0]] > Math.ceil(S.length / 2)) return '';

  const result = [];
  for (let i = 0; i < S.length; i += 2) {
    result[i] = chars[0];

    times[chars[0]]--;
    if (!times[chars[0]]) chars.shift();
  }
  for (let i = 1; i < S.length; i += 2) {
    result[i] = chars[0];

    times[chars[0]]--;
    if (!times[chars[0]]) chars.shift();
  }
  return result.join('');
};

module.exports = reorganizeString;
