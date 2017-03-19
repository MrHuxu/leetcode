var hIndex = function(citations) {
  var result = 0, len = citations.length;
  for (var i = 0; i < len; ++i) {
    if (citations[i] >= len - i) {
      result = len - i;
      break;
    }
  }
  return result;
};

console.log(hIndex([11, 15]));
console.log(hIndex([0]));
console.log(hIndex([100]));
