/**
 * @param {number[]} A
 * @return {number[]}
 */
let sortArrayByParity = function(A) {
  const res = [];
  for (let num of A) {
    if (num % 2) res.push(num);
    else res.unshift(num);
  }
  return res;
};

console.log(sortArrayByParity([3,1,2,4]));