var isPalindrome = function(s) {
  var i, j;
  var re = /\w+/;
  for (i = 0, j = s.length - 1; i <= j;) {
    if (re.test(s[i]) && re.test(s[j])) {
      if (s[i].toLowerCase() === s[j].toLowerCase()) {
        ++i;
        --j;
      } else {
        break;
      }
    } else {
      if (!re.test(s[i])) ++i;
      if (!re.test(s[j])) --j;
    }
  }

  return i > j;
};

console.log(isPalindrome(''));
console.log(isPalindrome('a'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));