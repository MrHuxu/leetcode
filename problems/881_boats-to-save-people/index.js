/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
let numRescueBoats = function(people, limit) {
  people.sort((a, b) => a < b ? 1 : -1);

  let result = 0, i = 0, j = people.length - 1;
  while (j >= i) {
    if (i === j) {
      result++;
      break;
    }

    if (people[i] + people[j] <= limit) {
      i++;
      j--;
    } else {
      i++;
    }

    result++;
  }
 
  return result;
};

module.exports = numRescueBoats;