var maxProduct = function(words) {
  var sums = [], max = 0;
  
  words.forEach(function (word, index) {
    sums[index] = 0;
    for (var i = 0, len = word.length; i < len; ++i) {
      sums[index] |= 1 << (word[i].charCodeAt() - 97); // use 26 bit length integer to store the existence of each letter
    }
    
    for (var i = 0; i <= index; ++i) {
      if (!(sums[i] & sums[index])) max = Math.max(words[i].length * len, max);
    }
  });
  
  console.log(sums);
  
  return max;
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]));
