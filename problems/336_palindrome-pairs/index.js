/**
 * Problem: https://leetcode.com/problems/palindrome-pairs/description/
 */
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  const isPalindrome = (str, l, r) => {
    while (l < r) {
      if (str[l++] !== str[r--]) return false;
    }
    return true;
  };

  // const wordsByVal = new Map(), lens = new Set();
  // words.forEach((word, i) => {
  //   wordsByVal.set(word, i);
  //   lens.add(word.length);
  // });

  // const results = [];
  // words.forEach((word, i) => {
  //   const len = word.length;
  //   const rev = word.split('').reverse().join('');

  //   if (wordsByVal.has(rev) && wordsByVal.get(rev) !== i) results.push([i, wordsByVal.get(rev)]);

  //   for (let j of lens.values()) {
  //     if (j === len) break;
  //     else {
  //       if (wordsByVal.has(rev.slice(len - j)) && isPalindrome(rev, 0, len - j - 1))
  //         results.push([i, wordsByVal.get(rev.slice(len - j))]);
  //       if (wordsByVal.has(rev.slice(0, j)) && isPalindrome(rev, j, len - 1))
  //         results.push([wordsByVal.get(rev.slice(0, j)), i]);
  //     }
  //   }
  // });

  // console.log(JSON.stringify(results));

  const results = [];

  for (let i = 0; i < words.length; ++i) {
    for (let j = i + 1; j < words.length; ++j) {
      if (isPalindrome(`${words[i]}${words[j]}`, 0, words[i].length + words[j].length - 1)) results.push([i, j]);
      if (isPalindrome(`${words[j]}${words[i]}`, 0, words[i].length + words[j].length - 1)) results.push([j, i]);
    }
  }
  return results;
};

module.exports = palindromePairs;
