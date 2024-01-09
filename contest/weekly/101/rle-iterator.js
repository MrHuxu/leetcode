/**
 * @param {number[]} A
 */
let RLEIterator = function(A) {
  this.top = 0;
  this.data = [];

  let step = 0;
  for (let i = 0; i < A.length - 1; i += 2) {
    if (A[i]) {
      const tmp = [step + 1, step + A[i], A[i + 1]];
      this.data.push(tmp);
      step += A[i];
    }
  }
};

/** 
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function(n) {
  this.top += n;

  for (let i = 0; i < this.data.length; i++) {
    if (this.top >= this.data[i][0] && this.top <= this.data[i][1]) {
      return this.data[i][2];
    } else {
      this.data.shift();
      i--;
    }
  }

  return -1;
};

/** 
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = Object.create(RLEIterator).createNew(A)
 * var param_1 = obj.next(n)
 */


const rle = new RLEIterator([3,8,0,9,2,5]);
console.log(rle.next(2));
console.log(rle.next(1));
console.log(rle.next(1));
console.log(rle.next(2));