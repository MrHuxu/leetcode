var reverseWords = function(str) {
  var arr = [], tmp;
  for (var i = 0, l = str.length; i < l; ++i) {
    if (str[i] !== ' ') {
      tmp = tmp === undefined ? str[i] : tmp + str[i];
    } else {
      if (tmp !== undefined) {
        arr.push(tmp);
        tmp = undefined;
      }
    }
  }
  if (tmp) arr.push(tmp);

  return arr.reverse().join(' ');
};

console.log(reverseWords(' 1 2'));
console.log(reverseWords("the sky is blue"));