/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  var result = 0;

  var decodable = function (str) {
    var num = parseInt(str, 10);
    return num >= 1 && num <= 26;
  };

  var dfs = function (pos) {
    if (!s[pos]) ++result;

    if (decodable(s[pos])) dfs(pos + 1);

    if (s[pos + 1]) {
      if (decodable(s[pos] + s[pos + 1])) dfs(pos + 2);
    }
  };
  dfs(0);

  return result;
};

console.log(numDecodings("4757562545844617494555774581341211511296816786586787755257741178599337186486723247528324612117156948"));
console.log(numDecodings('123'));