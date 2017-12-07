/**
 * Problem: https://leetcode.com/problems/merge-intervals/description/
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
function Interval(start, end) {
  this.start = start;
  this.end = end;
}

var merge = function(intervals) {
  const starts = [];
  const pair = intervals.reduce((pre, interval) => {
    if (pre[interval.start] === undefined) {
      pre[interval.start] = interval.end;
      starts.push(interval.start);
    } else pre[interval.start] = Math.max(pre[interval.start], interval.end);
    return pre;
  }, {});

  starts.sort((s1, s2) => s1 > s2 ? 1 : -1);
  for (let i = 0; i < starts.length; i++) {
    const start = starts[i];
    if (pair[start] !== undefined) {
      let end = pair[start];
      for (let j = i + 1; j < starts.length; j++) {
        if (pair[starts[j]] !== undefined && end >= starts[j]) {
          end = Math.max(end, pair[starts[j]]);
          delete pair[starts[j]];
        }
      }
      pair[start] = end;
    }
  }

  return starts.reduce((pre, start) => {
    if (pair[start] !== undefined) pre.push(new Interval(start, pair[start]));
    return pre;
  }, []);
};

module.exports = merge;
