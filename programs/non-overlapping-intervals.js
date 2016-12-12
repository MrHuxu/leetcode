var eraseOverlapIntervals = function(intervals) {
  var count = {}, max = 0;
  if (!intervals.length) return max;
  intervals.forEach(function (interval) {
    for (var i = interval.start; i < interval.end; ++i) {
      count[i - 1] = count[i - 1] ? ++count[i - 1] : 1;
      max = Math.max(max, count[i - 1]);
    }
  });

  return max - 1;
};