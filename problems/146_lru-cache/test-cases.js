const LRUCache =require('./index');
const cache = new LRUCache(2);

module.exports = [{
  func   : cache.put.bind(cache),
  input  : [1, 1],
  output : undefined
}, {
  func   : cache.put.bind(cache),
  input  : [2, 2],
  output : undefined
}, {
  func   : cache.put.bind(cache),
  input  : [3, 3],
  output : undefined
}, {
  func   : cache.get.bind(cache),
  input  : [2],
  output : 2
}, {
  func   : cache.put.bind(cache),
  input  : [4, 4],
  output : undefined
}, {
  func   : cache.get.bind(cache),
  input  : [1],
  output : -1
}, {
  func   : cache.get.bind(cache),
  input  : [3],
  output : -1
}, {
  func   : cache.get.bind(cache),
  input  : [4],
  output : 4
}];