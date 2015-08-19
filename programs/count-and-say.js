var countAndSay = function (n) {
  var pre = '1', result = '', count;
  if (n === 1) {
    result = '1';
  } else {
    while (--n) {
      result = '';
      for (var i = 0, l = pre.length; i < l;) {
        count = 1;
        while (pre[i + 1] && pre[i + 1] === pre[i]) {
          ++i;
          ++count;
        }
        result = result + count + pre[i];
        ++i;
      }
      pre = result;
    }
  }
  return result;
};

console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
