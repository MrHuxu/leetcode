/**
 * Problem: https://leetcode.com/problems/push-dominoes/description/
 */

const pushDominoes = S => {
  const chars = S.split('');
  while (true) {
    let changed = false, power = false;

    for (let i = 0; i < chars.length; i++) {
      const ch = chars[i];
      switch(ch) {
      case 'L':
        power = false;
        break;
      case 'R':
        power = true;
        break;
      case '.':
        if (power) {
          if ('L' !== chars[i + 1]) {
            chars[i] = 'R';
            changed = true;
          }
          power = false;
        } else if ('L' === chars[i +1]) {
          chars[i] = 'L';
          changed = true;
        }
        break;
      }
    }

    if (!changed) return chars.join('');
  }
};

module.exports = pushDominoes;
