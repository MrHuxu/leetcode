const { expect } = require('chai');

/**
 * @param {number[]} arr
 * @return {number}
 */
let mctFromLeafValues = function(arr) {
  if (arr.length <= 1) return 0;
  if (2 === arr.length) return arr[0] * arr[1];

  let result = 0;
  let max = arr[0], maxIndex = 0, secondMax = Number.MIN_SAFE_INTEGER, secondMaxIndex;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMaxIndex = maxIndex;
      secondMax = max;

      maxIndex = i;
      max = arr[i];
    } else if (arr [i] > secondMax && i !== maxIndex) {
      secondMax = arr[i];
      secondMaxIndex = i;
    }
  }

  result += max * secondMax;

  if (secondMaxIndex === undefined) {
    result += mctFromLeafValues(arr.slice(1));
  } else {
    if (secondMaxIndex < maxIndex) {
      result += mctFromLeafValues(arr.slice(0, maxIndex));
      result += mctFromLeafValues(arr.slice(maxIndex));
    } else {
      result += mctFromLeafValues(arr.slice(0, maxIndex + 1));
      result += mctFromLeafValues(arr.slice(maxIndex + 1));
    }
  }
  return result;
};

it('minimum-cost-tree-from-leaf-values', () => {
  expect(mctFromLeafValues([6,2,4])).to.eq(32);
  expect(mctFromLeafValues([7,12,8,10])).to.eq(284);
  expect(mctFromLeafValues([15,13,5,3,15])).to.eq(500);
});