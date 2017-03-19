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

var minStack = new MinStack();
minStack.push(2147483646);
minStack.push(2147483646);
minStack.push(2147483647);
console.log(minStack.top());
minStack.pop();
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());
minStack.pop();
minStack.push(2147483647);
console.log(minStack.top());
console.log(minStack.getMin());
minStack.push(-2147483648);
console.log(minStack.top());
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());