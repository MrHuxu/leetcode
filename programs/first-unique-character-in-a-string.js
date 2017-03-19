var firstUniqChar = function(s) {
  var times = {}, result = -1, i;
  for (i = 0; i < s.length; ++i) {
    times[s[i]] = times[s[i]] ? ++times[s[i]] : 1;
  }

  for (i = 0; i < s.length; ++i) {
    if (1 === times[s[i]]) {
      result = i;
      break;
    }
  }

  return result;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));