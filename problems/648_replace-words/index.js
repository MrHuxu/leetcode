/**
 * Problem: https://leetcode.com/problems/replace-words/description/
 */
/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
  const TreeNode = function(val) {
    this.val = val;
    this.isLeaf = false;
    this.children = {};
  };

  const root = new TreeNode(null);
  for (let word of dict) {
    let tmp = root;
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      const node = tmp.children[letter] || new TreeNode(letter);
      if (i === word.length - 1) node.isLeaf = true;
      tmp.children[letter] = node;
      tmp = node;
    }
  }

  return sentence.split(' ').map(word => {
    let tmp = root, wordRoot = '';
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      const node = tmp.children[letter];

      if (node) {
        wordRoot += letter;
        if (node.isLeaf) return wordRoot;
        tmp = node;
      } else {
        break;
      }
    }

    return word;
  }).join(' ');
};

module.exports = replaceWords;
