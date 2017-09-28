module.exports = [{
  input  : ['ab', 'ba'],
  output : true
}, {
  input  : ['\u03A9a', 'a\u03A9'],
  output : true
}, {
  input  : ['abc', 'bac'],
  output : true
}];
