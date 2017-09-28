module.exports = [{
  input  : ['/home/'],
  output : '/home',
}, {
  input  : ['/a/./b/../../c/'],
  output : '/c'
}];
