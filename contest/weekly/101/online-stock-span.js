
let StockSpanner = function() {
  this.data = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  let result = 0;
  for (let i = this.data.length - 1; i >= 0; i--) {
    if (this.data[i] <= price) result++;
    else break;
  }

  this.data.push(price);
  return result + 1;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = Object.create(StockSpanner).createNew()
 * var param_1 = obj.next(price)
 */

const ss = new StockSpanner();
console.log(ss.next(100));
console.log(ss.next(80));
console.log(ss.next(60));
console.log(ss.next(70));
console.log(ss.next(60));
console.log(ss.next(75));
console.log(ss.next(85));