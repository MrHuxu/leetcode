/**
 * @param {number[]} arr
 */
let MajorityChecker = function(arr) {
  this.data = arr;
  this.total = {};

  for (let ele of arr) {
    this.total[ele] = this.total[ele] ? this.total[ele] + 1 : 1;
  }
};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} threshold
 * @return {number}
 */
MajorityChecker.prototype.query = function(left, right, threshold) {
  const total = Object.assign({}, this.total);
  for (let i = 0; i < left; i++) {
    total[this.data[i]]--;
  }
  for (let i = right + 1; i < this.data.length; i++) {
    total[this.data[i]]--;
  }
  for (let k in total) {
    if (total[k] >= threshold) return k;
  }
  return -1;
};

/** 
 * Your MajorityChecker object will be instantiated and called as such:
 * var obj = new MajorityChecker(arr)
 * var param_1 = obj.query(left,right,threshold)
 */

const mc = new MajorityChecker([1,1,2,2,1,1]);
console.log(mc.query(0, 5, 4));
console.log(mc.query(0, 3, 3));
console.log(mc.query(2, 3, 2));