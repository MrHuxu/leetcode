/**
 * Problem: https://leetcode.com/problems/minimum-time-difference/description/
 */
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  var timeNums = timePoints.map(function (point) {
    var arr = point.split(':');
    return Number(arr[0]) * 60 + Number(arr[1]);
  });

  var tmp;
  var buildHeap = function (arr) {
    for (var i = parseInt(arr.length / 2); i >= 1; --i) {
      if (arr[i * 2] && arr[i * 2] > arr[i - 1]) {
        tmp = arr[i - 1];
        arr[i - 1] = arr[i * 2];
        arr[i * 2] = tmp;
      }

      if (arr[i * 2 - 1] > arr[i - 1]) {
        tmp = arr[i - 1];
        arr[i - 1] = arr[i * 2 - 1];
        arr[i * 2 - 1] = tmp;
      }
    }
  };

  buildHeap(timeNums);
  var maxNum = timeNums[0], init = timeNums.shift(), min = 1500;
  for (var i = 1; i < timePoints.length; ++i) {
    buildHeap(timeNums);
    min = Math.min(init - timeNums[0], 1440 - (maxNum - timeNums[0]), min);
    init = timeNums.shift();
  }

  return min;
};
module.exports = findMinDifference;
