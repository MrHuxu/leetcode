const MagicDictionary = require('./index');

const dict = new MagicDictionary();
dict.buildDict(["hello", "leetcode"]);

const dict2 = new MagicDictionary();
dict2.buildDict(["hello","hallo","leetcode"]);

const dict3 = new MagicDictionary();
dict3.buildDict(['a', 'b', 'ab']);

module.exports = [{
  func   : dict.search.bind(dict),
  input  : ['hello'],
  output : false
}, {
  func   : dict.search.bind(dict),
  input  : ['hhllo'],
  output : true
}, {
  func   : dict.search.bind(dict),
  input  : ['hell'],
  output : false
}, {
  func   : dict.search.bind(dict),
  input  : ['leetcoded'],
  output : false
}, {
  func   : dict2.search.bind(dict2),
  input  : ['hello'],
  output : true
}, {
  func   : dict2.search.bind(dict2),
  input  : ['hhllo'],
  output : true
}, {
  func   : dict2.search.bind(dict2),
  input  : ['hell'],
  output : false
}, {
  func   : dict2.search.bind(dict2),
  input  : ['leetcoded'],
  output : false
}, {
  func   : dict3.search.bind(dict3),
  input  : ['b'],
  output : true
}];
