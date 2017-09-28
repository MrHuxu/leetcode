module.exports = [{
  input  : ['aa', 'a'],
  output : false
}, {
  input  : ['aa', 'aa'],
  output : true
}, {
  input  : ['aaa', 'a'],
  output : false
}, {
  input  : ['aa', 'a*'],
  output : true
}, {
  input  : ['aa', '.*'],
  output : true
}, {
  input  : ['ab', '.*'],
  output : true
}, {
  input  : ['aab', 'c*a*b'],
  output : true
}, {
  input  : ['abcd', 'd*'],
  output : false
}, {
  input  : ['ab', '.*c'],
  output : false
}, {
  input  : ['ab', '.*c'],
  output : false
}, {
  input  : ['a', 'ab*'],
  output : true
}, {
  input  : ['', '..*'],
  output : false
}, {
  input  : ['bbbba', '.*a*a'],
  output : true
}, {
  input  : ['aaaaaaaaaaaaab', 'a*a*a*a*a*a*a*a*a*a*c'],
  output : false
}];
