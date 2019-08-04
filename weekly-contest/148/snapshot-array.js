/**
 * @param {number} length
 */
let SnapshotArray = function(length) {
  this.snaps = [{}];
  this.snapTop = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
  this.snaps[this.snapTop][index] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
  const tmp = {};
  for (let k in this.snaps[this.snapTop]) {
    tmp[k] = this.snaps[this.snapTop][k];
  }
  this.snaps.push(tmp);

  this.snapTop++;
  return this.snapTop - 1;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
  return this.snaps[snap_id][index] || 0;
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

// const sa = new SnapshotArray(3);
// console.log(sa.set(0, 5));
// console.log(sa.snap());
// console.log(sa.set(0, 6));
// console.log(sa.get(0, 0));

const sa = new SnapshotArray(4);
console.log(sa.snap());
console.log(sa.snap());
console.log(sa.get(3, 1));
console.log(sa.set(2, 4));
console.log(sa.snap());
console.log(sa.set(1, 4));
