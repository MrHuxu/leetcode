/**
 * Problem: https://leetcode.com/problems/number-of-matching-subsequences/description/
 */

const numberOfMatchingSubsequences = (S, words) => {
  const TrieNode = function () {
    this.endCount = 0;
    this.children = {};
  };
  const root = new TrieNode();
  for (let word of words) {
    let tmp = root;
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      if (!tmp.children[ch]) tmp.children[ch] = new TrieNode(false);
      tmp = tmp.children[ch];
    }
    tmp.endCount++;
  }

  let result = 0;
  const traverse = (n, node) => {
    const ch = S[n];
    if (!node.children[ch]) return;
    
    node = node.children[ch];
    if (node.endCount) {
      result += node.endCount;
      node.endCount = 0;
    }
    for (let i = n + 1; i < S.length; i++) {
      traverse(i, node);
    }
  };
  for (let i = 0; i < S.length; i++) traverse(i, root);

  return result;
};

module.exports = numberOfMatchingSubsequences;
