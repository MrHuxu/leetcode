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

  console.log({ chars, times });
  let even = 0, odd = 1, result = '';
  while (result.length < S.length) {
    if (0 == result.length % 2) {
      const ch = chars[even];
      result += ch;

      times[ch]--;
      if (!times[ch]) even = Math.max(even + 1, odd + 1);
    } else {
      const ch = chars[odd];
      result += ch;

      times[ch]--;
      if (!times[ch]) odd = Math.max(even + 1, odd + 1);
    }
  }
  return result;
};

module.exports = reorganizeString;
