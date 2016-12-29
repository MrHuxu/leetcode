var wordBreak = function (s, wordDict) {
  var dictMap = {}, maxLength = 0;
  wordDict.forEach(function (word) {
    dictMap[word] = true;
    maxLength = Math.max(word.length, maxLength);
  });

  var dp = [[{ arr: [], prefix: '' }]];
  for (var i = 1; i <= s.length; ++i) {
    var letter = s[i - 1];
    var prev = dp[i - 1];
    var curr = [];

    prev.forEach(function (p) {
      var word = p.prefix + letter;

      if (word.length <= maxLength) curr.push({ arr: p.arr, prefix: word });

      var tmp = p.arr.slice();
      if (dictMap[word]) {
        tmp.push(word);
        curr.push({ arr: tmp, prefix: '' });
      }
    });
    console.log(curr);
    dp.push(curr);
  }

  var result = [];
  dp[s.length].forEach(function (d) {
    if (!d.prefix.length) {
      result.push(d.arr.join(' '));
    }
  });

  return result;
};

console.log(wordBreak('catsanddog', ["cat", "cats", "and", "sand", "dog"]));
console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]))