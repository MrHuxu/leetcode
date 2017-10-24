/**
 * Problem: https://leetcode.com/problems/implement-magic-dictionary/description/
 */
/**
 * Initialize your data structure here.
 */
var MagicDictionary = function(val = '') {
  this.isWord = false;
  this.children = {};
};

/**
 * Build a dictionary through a list of words 
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
  for (let word of dict) {
    let children = this.children;
    for (let i = 0; i < word.length; ++i) {
      if (!children[word[i]]) {
        children[word[i]] = new MagicDictionary(word[i]);
      }
      if (i === word.length - 1) children[word[i]].isWord = true;
      children = children[word[i]].children;
    }
  }
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
  let flag = false;
  const search = (isWord, children, i, changed) => {
    if (flag) return;

    if (i === word.length && isWord && changed) {
      flag = true;
      return;
    }

    if (children[word[i]]) {
      search(children[word[i]].isWord, children[word[i]].children, i + 1, changed);
    }

    if (!changed) {
      for (let key of Object.keys(children)) {
        if (key !== word[i]) search(children[key].isWord, children[key].children, i + 1, true);
      }
    }
  };
  search(this.isWord, this.children, 0, false);

  return flag;
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = Object.create(MagicDictionary).createNew()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */
module.exports = MagicDictionary;
