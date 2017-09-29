const NumArray = require("./index");

const numArr = new NumArray([1, 3, 5]);
const numArr2 = new NumArray([-1]);

module.exports = [{
  func   : numArr.sumRange.bind(numArr),
  input  : [0, 2],
  output : 9
}, {
  func   : numArr.update.bind(numArr),
  input  : [1, 2],
  output : undefined
}, {
  func   : numArr.sumRange.bind(numArr),
  input  : [0, 2],
  output : 8
}, {
  func   : numArr2.sumRange.bind(numArr2),
  input  : [0, 0],
  output : -1
}, {
  func   : numArr2.update.bind(numArr2),
  input  : [0, 1],
  output : undefined
}, {
  func   : numArr2.sumRange.bind(numArr2),
  input  : [0, 0],
  output : 1
}];
