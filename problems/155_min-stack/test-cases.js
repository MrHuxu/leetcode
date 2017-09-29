const MinStack = require('./index');

const minStack = new MinStack();
minStack.push(2147483646);
minStack.push(2147483646);
minStack.push(2147483647);

const { push, pop, top, getMin } = minStack;

module.exports = [{
  func   : top.bind(minStack),
  input  : [],
  output : 2147483647
}, {
  func   : pop.bind(minStack),
  input  : [],
  output : undefined
}, {
  func   : getMin.bind(minStack),
  input  : [],
  output : 2147483646
}, {
  func   : pop.bind(minStack),
  input  : [],
  output : undefined
}, {
  func   : getMin.bind(minStack),
  input  : [],
  output : 2147483646
}, {
  func   : pop.bind(minStack),
  input  : [],
  output : undefined
}, {
  func   : push.bind(minStack),
  input  : [2147483647],
  output : undefined
}, {
  func   : top.bind(minStack),
  input  : [],
  output : 2147483647
}, {
  func   : getMin.bind(minStack),
  input  : [],
  output : 2147483647
}, {
  func   : push.bind(minStack),
  input  : [-2147483648],
  output : undefined
}, {
  func   : top.bind(minStack),
  input  : [],
  output : -2147483648
}, {
  func   : getMin.bind(minStack),
  input  : [],
  output : -2147483648
}, {
  func   : pop.bind(minStack),
  input  : [],
  output : undefined
}, {
  func   : getMin.bind(minStack),
  input  : [],
  output : 2147483647
}];
