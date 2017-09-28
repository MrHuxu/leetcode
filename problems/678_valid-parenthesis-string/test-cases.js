module.exports = [{
  input  : [')'],
  output : false
}, {
  input  : ['()'],
  output : true
}, {
  input  : ['(*)'],
  output : true
}, {
  input  : ['(*))'],
  output : true
}, {
  input  : ['((*)'],
  output : true
}, {
  input  : ['((*))'],
  output : true
}];
