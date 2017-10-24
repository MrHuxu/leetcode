/**
 * Problem: https://leetcode.com/problems/reconstruct-original-digits-from-english/description/
 */
/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
  var count = {}, i, j;

  for (i = 97; i <= 122; ++i) count[String.fromCharCode(i)] = 0;
  for (i = 0; i < s.length; ++i) {
    ++count[s[i]];
  }

  var nums = [];
  for (i = 0; i < 10; ++i) nums[i] = 0;

  nums[0] = count['z'];
  count['e'] -= nums[0];
  count['r'] -= nums[0];
  count['o'] -= nums[0];

  nums[6] = count['x'];
  count['s'] -= nums[6];
  count['i'] -= nums[6];

  nums[3] = count['h'] - count['g'];
  count['t'] -= nums[3];
  count['r'] -= nums[3];
  count['e'] -= nums[3] * 2;

  nums[7] = count['s'];
  count['e'] -= nums[7] * 2;
  count['v'] -= nums[7];
  count['n'] -= nums[7];

  nums[5] = count['v'];
  count['f'] -= nums[5];
  count['i'] -= nums[5];
  count['e'] -= nums[5];

  nums[4] = count['f'];
  count['o'] -= nums[4];
  count['u'] -= nums[4];
  count['r'] -= nums[4];

  nums[2] = count['w'];
  count['t'] -= nums[2];
  count['o'] -= nums[2];

  nums[1] = count['o'];
  count['n'] -= nums[1];
  count['e'] -= nums[1];

  nums[8] = count['g'];
  nums[9] = count['n'] / 2;

  var result = '';
  for (i = 0; i < 10; ++i) {
    for (j = 0; j < nums[i]; ++j) {
      result += i;
    }
  }

  return result;
};
module.exports = originalDigits;
