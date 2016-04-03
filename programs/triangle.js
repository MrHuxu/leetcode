var minimumTotal = function(triangle) {
  for (var i = 1, l1 = triangle.length; i < l1; ++i) {
    var l2 = triangle[i].length;
    var tmp = triangle[i - 1].slice();
    triangle[i][0] = tmp[0] + triangle[i][0];
    triangle[i][l2 - 1] = tmp[l2 - 2] + triangle[i][l2 - 1];
    for (var j = 1; j < l2 - 1; ++j) {
      triangle[i][j] = Math.min(tmp[j - 1], tmp[j]) + triangle[i][j];
    }
  }

  return Math.min.apply(null, triangle[triangle.length - 1]);
};

var tri = [
[-7],
[-2,1],
[-5,-5,9],
[-4,-5,4,4],
[-6,-6,2,-1,-5],
[3,7,8,-3,7,-9],
[-9,-1,-9,6,9,0,7],
[-7,0,-6,-8,7,1,-4,9],
[-3,2,-6,-9,-7,-6,-9,4,0],
[-8,-6,-3,-9,-2,-6,7,-5,0,7],
[-9,-1,-2,4,-2,4,4,-1,2,-5,5],
[1,1,-6,1,-2,-4,4,-2,6,-6,0,6],
[-3,-3,-6,-2,-6,-2,7,-9,-5,-7,-5,5,1]
];

console.log(minimumTotal(tri));