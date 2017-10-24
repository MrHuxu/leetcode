/**
 * Problem: https://leetcode.com/problems/min-stack/description/
 */
/**
 * @constructor
 */
var MinStack = function() {
  this.data = [];
  this.cursor = -1;
  this.min = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
  this.data[++this.cursor] = x;
  if (0 === this.cursor) {
    this.min[this.cursor] = x;
  } else {
    this.min[this.cursor] = x < this.min[this.cursor - 1] ? x : this.min[this.cursor - 1];
  }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
  --this.cursor;
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
  return this.data[this.cursor];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
  return this.min[this.cursor];
};
module.exports = MinStack;
