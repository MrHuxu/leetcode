/**
 * @param {number[]} time
 * @return {number}
 */
let numPairsDivisibleBy60 = function(time) {
  let result = 0;
  for (let i = 0; i < time.length - 1; i++) {
    for (let j = i + 1; j < time.length; j++) {
      if (0 === (time[i] + time[j]) % 60) result++;
    }
  }
  return result;
};

console.log(numPairsDivisibleBy60([30,20,150,100,40]));
console.log(numPairsDivisibleBy60([60,60,60]));