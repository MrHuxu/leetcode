
let RecentCounter = function() {
  this.data = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.data[t] = true;
  let result = 0;
  for (let i = t - 3000; i <= t; i++) {
    if (this.data[i]) result++;
  }
  return result;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = Object.create(RecentCounter).createNew()
 * var param_1 = obj.ping(t)
 */

const rc = new RecentCounter();
console.log(rc.ping(1));
console.log(rc.ping(100));
console.log(rc.ping(3001));
console.log(rc.ping(3002));