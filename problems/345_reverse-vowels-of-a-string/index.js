/**
 * Problem: https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  var vowels = {
    a : true,
    e : true,
    i : true,
    o : true,
    u : true,
    A : true,
    E : true,
    I : true,
    O : true,
    U : true
  };
  
  var str = s.split(''), tmp;
  for (var i = 0, j = s.length - 1; i <= j;) {
    if (vowels[str[i]] && vowels[str[j]]) {
      tmp = str[i];
      str[i] = str[j];
      str[j] = tmp;
      ++i;
      --j;
    } else {
      if (!vowels[str[i]]) ++i;
      if (!vowels[str[j]]) --j;
    }
  }
  
  return str.join('');
};
module.exports = reverseVowels;
