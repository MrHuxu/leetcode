var s = 'PAYPALISHIRING';
var numRows = 3;

var convert = function (s, numRows) {
  var base = numRows * 2 - 2, tmp, line, result = '';
  var lines = {};
  if (numRows === 1) {
    return s;
  } else {
    for (var i = 0; i < s.length; i++) {
      tmp = i % base;
      line = tmp < numRows ? tmp : (numRows * 2 - 2 - tmp);
      lines[line] = lines[line] ? lines[line] + s[i] : s[i];
    }
  }
  for (var i = 0; i < numRows; i++) {
    if (lines[i])
      result += lines[i];
  }
  return result;
};

console.log(convert(s, numRows));
