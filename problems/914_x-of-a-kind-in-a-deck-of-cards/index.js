/**
 * @param {number[]} deck
 * @return {boolean}
 */
let hasGroupsSizeX = function(deck) {
  const count = {};
  for (let num of deck) count[num] = count[num] ? count[num] + 1 : 1;

  let min = count[deck[0]];
  for (let key of Object.keys(count)) min = Math.min(count[key], min);

  if (min < 2) return false;

  for (let i = 2; i <= min; i++) {
    let tmp = true;
    for (let key of Object.keys(count)) {
      if (count[key] % i) {
        tmp = false;
        break;
      }
    }
    if (tmp) return true;
  }
  return false;
};

console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1]));
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]));
console.log(hasGroupsSizeX([1]));
console.log(hasGroupsSizeX([1,1]));
console.log(hasGroupsSizeX([1,1,2,2,2,2]));
console.log(hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2]));