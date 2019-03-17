/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

/**
 * @param {Interval[]} A
 * @param {Interval[]} B
 * @return {Interval[]}
 */
let intervalIntersection = function(A, B) {
  let a = 0, b = 0;
  const result = [];
  while(a < A.length & b < B.length) {
    if ((A[a].start <= B[b].start && A[a].end >= B[b].start) || (A[a].start <= B[b].end && A[a].end >= B[b].end) || (A[a].start >= B[b].start && A[a].end <= B[b].end) || (A[a].start <= B[b].start && A[a].end >= B[b].end)) {
      const start = Math.max(A[a].start, B[b].start);
      const end = Math.min(A[a].end, B[b].end);
      result.push(new Interval(start,end));
    }

    if (A[a].end < B[b].end) {
      a++;
    } else if (A[a].end > B[b].end) {
      b++;
    } else {
      a++;
      b++;
    }
  }
  return result;
};

module.exports = intervalIntersection;