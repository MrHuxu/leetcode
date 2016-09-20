var isSubsequence = function(s, t) {
  var i, j = 0;
  for (i = 0; i < t.length && j < s.length; ++i) {
    if (t[i] === s[j]) ++j;
  }

  return j === s.length;
};

console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('abdc', 'ahbgdc'));
console.log(isSubsequence('acb', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));