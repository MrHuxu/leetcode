module.exports = [{
  input  : ['()'],
  output : true,
}, {
  input  : ['()[]{}'],
  output : true
}, {
  input  : '([)]',
  output : false
}];
