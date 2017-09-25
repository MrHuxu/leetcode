/**
 * Initialize your data structure here.
 */
var MagicDictionary = function(val = '') {
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
  const search = (children, i, changed) => {
    if (flag) return;

    if (i === word.length && !Object.keys(children).length && changed) {
      flag = true;
      return;
    }

    if (children[word[i]]) {
      search(children[word[i]].children, i + 1, changed);
    } else if (!changed) {
      for (let dict of Object.keys(children).map(key => children[key])) {
        search(dict.children, i + 1, true);
      }
    }
  };
  search(this.children, 0, false);

  return flag;
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = Object.create(MagicDictionary).createNew()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */

// const dict = new MagicDictionary();
// dict.buildDict(["hello", "leetcode"]);
// console.log(dict.search("hello"));
// console.log(dict.search("hhllo"));
// console.log(dict.search("hell"));
// console.log(dict.search("leetcoded"));

const dict2 = new MagicDictionary();
dict2.buildDict(["hello","hallo","leetcode"]);
console.log(dict2.search("hello")); //true
console.log(dict2.search("hhllo"));
console.log(dict2.search("hell"));
console.log(dict2.search("leetcoded"));