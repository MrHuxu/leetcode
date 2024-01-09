const { expect } = require('chai');

/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSumDivThree = function(nums) {
  const sum = nums.reduce((pre, curr) => pre + curr, 0);
  nums.sort((a, b) => a > b ? 1 : -1);


  if (1 === sum % 3) {
    let smallest1, firstSmallest2, secondSmallest2;

    for (let num of nums) {
      if (1 === num % 3) {
        if (!smallest1) smallest1 = num;
      }
      if (2 === num % 3) {
        if (!firstSmallest2) firstSmallest2 = num;
        else if (!secondSmallest2) secondSmallest2 = num;
      }
      if (smallest1 !== undefined && firstSmallest2 !== undefined && secondSmallest2 !== undefined) break;
    }

    if (smallest1 !== undefined) {
      if (firstSmallest2 !== undefined && secondSmallest2 !== undefined) {
        return sum - Math.min(smallest1, firstSmallest2 + secondSmallest2);
      } else {
        return sum - smallest1; 
      }
    } else {
      if (firstSmallest2 !== undefined && secondSmallest2 !== undefined) {
        return sum - firstSmallest2 - secondSmallest2;
      } else {
        return 0;
      }
    }
  }

  if (2 === sum % 3) {
    let smallest2, firstSmallest1, secondSmallest1;

    for (let num of nums) {
      if (2 === num % 3) {
        if (!smallest2) smallest2 = num;
      }
      if (1 === num % 3) {
        if (!firstSmallest1) firstSmallest1 = num;
        else if (!secondSmallest1) secondSmallest1 = num;
      }
      if (smallest2 !== undefined && firstSmallest1 !== undefined && secondSmallest1 !== undefined) break;
    }

    if (smallest2 !== undefined) {
      if (firstSmallest1 !== undefined && secondSmallest1 !== undefined) {
        return sum - Math.min(smallest2, firstSmallest1 + secondSmallest1);
      } else {
        return sum - smallest2; 
      }
    } else {
      if (firstSmallest1 !== undefined && secondSmallest1 !== undefined) {
        return sum - firstSmallest1 - secondSmallest1;
      } else {
        return 0;
      }
    }
  }

  return sum;
};

it('greatest-sum-divisible-by-three', () => {
  expect(maxSumDivThree([3,6,5,1,8])).to.eq(18);
  expect(maxSumDivThree([4])).to.eq(0);
  expect(maxSumDivThree([1,2,3,4,4])).to.eq(12);
  expect(maxSumDivThree([4,1,5,3,1])).to.eq(12);
});