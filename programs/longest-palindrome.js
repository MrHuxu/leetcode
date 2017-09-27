var longestPalindrome = function(s) {
  if (!s.length) return 0;

  var existance = {};
  for (var i = 0; i < s.length; ++i) {
    if (existance[s[i]]) {
      delete existance[s[i]];
    } else {
      existance[s[i]] = true;
    }
  }

  if (Object.keys(existance).length) {
    return s.length - Object.keys(existance).length + 1;
  } else {
    return s.length;
  }
};

console.log(longestPalindrome('abccccdd'));
console.log(longestPalindrome('a'));
console.log(longestPalindrome(''));
console.log(longestPalindrome('bb'));
console.log(longestPalindrome('ab'));
console.log(longestPalindrome('aba'));