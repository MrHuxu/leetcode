module.exports = [{
  input  : [["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]],
  output : ["int main()","{ ","  ","int a, b, c;","a = b + c;","}"]
}, {
  input  : [["a/*comment", "line", "more_comment*/b"]],
  output : ['ab']
}];