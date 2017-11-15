module.exports = [{
  input  : [["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]],
  output : ["int main()","{ ","  ","int a, b, c;","a = b + c;","}"]
}, {
  input  : [["a/*comment", "line", "more_comment*/b"]],
  output : ['ab']
}, {
  input  : [["struct Node{", "    /*/ declare members;/**/", "    int size;", "    /**/int val;", "};"]],
  output : ["struct Node{","    ","    int size;","    int val;","};"]
}, {
  input  : [["void func(int k) {", "// this function does nothing /*", "   k = k*2/4;", "   k = k/2;*/", "}"]],
  output : ["void func(int k) {","   k = k*2/4;","   k = k/2;*/","}"]
}, {
  input  : [["a//*b//*c","blank","d/*/e*//f"]],
  output : ["a","blank","d/f"]
}, {
  input  : [["a/*/b//*c","blank","d/*/e*//f"]],
  output : ["ae*"]
}];