var hIndex = function(citations) {
  var scoreMap = {}, max = citations[0], i;
  citations.forEach(function(c) {
    for (i = 0; i <= c; ++i) {
      if (scoreMap[i] === undefined)
        scoreMap[i] = 1;
      else
        ++scoreMap[i];
    }
    max = Math.max(c, max);
  }, this);
  for (i = max; max >= 0; --i) {
    if (scoreMap[i] >= i) break;
  }
  return i || 0;
};

console.log(hIndex([3, 0, 6, 1, 5]));