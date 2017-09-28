module.exports = [{
  input  : ['3[a]2[bc]'],
  output : 'aaabcbc'
}, {
  input  : ['3[a2[c]]'],
  output : 'accaccacc'
}, {
  input  : ['2[2[2[2[b]]]]'],
  output : 'bbbbbbbbbbbbbbbb'
}, {
  input  : ['2[abc]3[cd]ef'],
  output : 'abcabccdcdcdef'
}, {
  input  : [''],
  output : ''
}, {
  input  : ['leetcode'],
  output : 'leetcode'
}];
