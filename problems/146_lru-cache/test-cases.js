const LRUCache =require('./index');
const cache = new LRUCache(2);

module.exports = [{
  mutate  : true,
  program : cache.put,
  input   : [1, 1],
  output  : undefined
}, {
  mutate  : true,
  program : cache.put,
  input   : [2, 2],
  output  : undefined
}, {
  mutate  : true,
  protram : cache.get,
  input   : [1],
  output  : 1
}, {
  mutate  : true,
  program : cache.put,
  input   : [3, 3],
  output  : undefined
}, {
  mutate  : true,
  program : cache.get,
  input   : [2],
  output  : -1
}, {
  mutate  : true,
  program : cache.put,
  input   : [4, 4],
  output  : undefined
}, {
  mutate  : true,
  program : cache.get,
  input   : [1],
  output  : -1
}, {
  mutate  : true,
  program : cache.get,
  input   : [3],
  output  : 3
}, {
  mutate  : true,
  program : cache.get,
  input   : [4],
  output  : 4
}];