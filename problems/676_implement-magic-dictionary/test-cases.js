const MagicDictionary = require('./index');

const dict = new MagicDictionary();
dict.buildDict(["hello", "leetcode"]);
console.log(dict.search("hello"));
console.log(dict.search("hhllo"));
console.log(dict.search("hell"));
console.log(dict.search("leetcoded"));

const dict2 = new MagicDictionary();
dict2.buildDict(["hello","hallo","leetcode"]);
console.log(JSON.stringify(dict2.children));
console.log(dict2.search("hello")); //true
console.log(dict2.search("hhllo"));
console.log(dict2.search("hell"));
console.log(dict2.search("leetcoded"));

const dict3 = new MagicDictionary();
dict3.buildDict(['a', 'b', 'ab']);
console.log(dict3.search('b'));

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
