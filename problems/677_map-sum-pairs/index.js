/**
 * Problem: https://leetcode.com/problems/map-sum-pairs/description/
 */
/**
 * Initialize your data structure here.
 */
var MapSum = function(val = 0) {
  this.val = val;
  this.children = {};
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  let i = 0;
  let children = this.children;
  for (i = 0; i < key.length - 1; ++i) {
    if (!children[key[i]]) {
      children[key[i]] = new MapSum();
    }
    children = children[key[i]].children;
  }
  if (children[key[i]]) {
    children[key[i]].val = val;
  } else {
    children[key[i]] = new MapSum(val);
  }
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  const dfs = node => {
    return node.val + Object.keys(node.children).map(key => node.children[key]).reduce((prev, curr) => prev + dfs(curr), 0);
  };
  let i;
  let children = this.children;
  for (i = 0; i < prefix.length - 1; ++i) {
    if (children[prefix[i]]) {
      children = children[prefix[i]].children;
    } else {
      return 0;
    }
  }
  return children[prefix[i]] ? dfs(children[prefix[i]]) : 0;
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

module.exports = MapSum;
