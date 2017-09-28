module.exports = [{
  input  : ['a'],
  output : 0
}, {
  input  : ['dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext'],
  output : 20
}, {
  input  : ['dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext'],
  output : 32
}];
