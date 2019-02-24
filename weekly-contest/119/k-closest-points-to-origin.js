/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
let kClosest = function(points, K) {
  const result = [];

  const countPoint = i => points[i][0] * points[i][0] + points[i][1] * points[i][1];

  for (; K > 0; K--) {
    for (let i = parseInt(points.length / 2); i >= 1; i--) {
      const root = i - 1;
      const left = i * 2 - 1;
      const right = i * 2;
      let tmp;

      if (countPoint(left) < countPoint(root)) {
        tmp = points[left];
        points[left] = points[root];
        points[root] = tmp;
      }

      if (points[right] && countPoint(right) < countPoint(root)) {
        tmp = points[right];
        points[right] = points[root];
        points[root] = tmp;
      }
    }

    result.push(points.shift());
  }

  return result;
};

console.log(kClosest([[3,3],[5,-1],[-2,4]], 2));