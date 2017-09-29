const MapSum = require('./index');

const m = new MapSum();
m.insert('aa', 3);

const m1 = new MapSum();
m1.insert('apple', 3);
m1.insert('app', 2);

module.exports = [{
  func   : m.sum.bind(m),
  input  : ['a'],
  output : 3
}, {
  func   : m.insert.bind(m),
  input  : ['aa', 2],
  output : undefined
}, {
  func   : JSON.stringify,
  input  : [m.children],
  output : '{"a":{"val":0,"children":{"a":{"val":2,"children":{}}}}}'
}, {
  func   : m.sum.bind(m),
  input  : ['a'],
  output : 2
}, {
  func   : JSON.stringify,
  input  : [m1.children],
  output : '{"a":{"val":0,"children":{"p":{"val":0,"children":{"p":{"val":2,"children":{"l":{"val":0,"children":{"e":{"val":3,"children":{}}}}}}}}}}}'
}, {
  func   : m1.sum.bind(m1),
  input  : ['ap'],
  output : 5
}];
