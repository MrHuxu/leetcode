/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  var num = parseInt(Math.sqrt(area));

  if (num * num === area) {
    return [num, num];
  } else {
    var l, w;
    while (num++) {
      if (area % num === 0) return [num, area / num];
    }
  }
};

console.log(constructRectangle(6));