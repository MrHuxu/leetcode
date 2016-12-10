/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  return s.split(' ').filter(function (i) {
    return i.length;
  }).length;
};