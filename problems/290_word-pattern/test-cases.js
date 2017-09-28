module.exports = [{
  input  : ['abba', "dog cat cat dog"],
  output : true
}, {
  input  : ['abba', "dog cat cat fish"],
  output : false
}, {
  input  : ['', ''],
  output : false
}];
