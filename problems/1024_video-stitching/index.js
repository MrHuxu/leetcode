/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
let videoStitching = function(clips, T) {
  const m = clips.reduce((pre, curr) => {
    pre[curr[0]] = Math.max((pre[curr[0]] || 0), curr[1]);
    return pre;
  }, {});

  let start = 0, end = 0, result = 0;
  while (end < T) {
    let maxEnd = 0;
    for (let i = start; i >= 0; i--) {
      maxEnd = Math.max(maxEnd, (m[i] || 0));
    }
    
    if (maxEnd === end) return -1;
    else {
      end = maxEnd;
      start = maxEnd;
      result++;
    }
  }

  return result;
};

console.log(videoStitching([[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], 10));
console.log(videoStitching([[0,1],[1,2]], 5));
console.log(videoStitching([[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], 9));
console.log(videoStitching([[0,4],[2,8]], 5));