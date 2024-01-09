/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
let shipWithinDays = function(weights, D) {
  let start = Math.max(...weights);

  for (; true; start++) {
    let pre = 0, sum = 0;
    for (let i = 0; i < weights.length; i++) {
      if (pre + weights[i] <= start) pre += weights[i];
      else {
        pre = weights[i];
        sum++;
      }
    }
    sum++;

    if (sum <= D) return start;
  }
};

console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5));
console.log(shipWithinDays([3,2,2,4,1,4], 3));
console.log(shipWithinDays([1,2,3,1,1], 4));