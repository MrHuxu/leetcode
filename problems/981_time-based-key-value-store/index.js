/**
 * Initialize your data structure here.
 */
let TimeMap = function() {
  this.data = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.data[key]) this.data[key] = [];
  this.data[key].push({ value, timestamp });
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  if (!this.data[key]) return '';
  let value;
  for (let i = this.data[key].length - 1; i >= 0; i--) {
    if (this.data[key][i].timestamp <= timestamp) {
      value = this.data[key][i].value;
      break;
    }
  }
  return value || '';
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = Object.create(TimeMap).createNew()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

const tm = new TimeMap();
console.log(tm.set('foo', 'bar', 1)); // store the key "foo" and value "bar" along with timestamp = 1   
console.log(tm.get('foo', 1)); // output "bar"   
console.log(tm.get('foo', 3)); // output "bar" since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 ie "bar"   
console.log(tm.set('foo', 'bar2', 4));   
console.log(tm.get('foo', 4)); // output "bar2"   
console.log(tm.get('foo', 5)); //output "bar2"  

const tm1 = new TimeMap();
console.log(tm1.set('love', 'high', 10));
console.log(tm1.set('love', 'low', 20));
console.log(tm1.get('love', 5));
console.log(tm1.get('love', 10));
console.log(tm1.get('love', 15));
console.log(tm1.get('love', 20));
console.log(tm1.get('love', 25));