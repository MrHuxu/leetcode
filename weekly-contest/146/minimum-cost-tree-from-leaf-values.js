const { expect } = require('chai');

/**
 * @param {number[]} arr
 * @return {number}
 */
let mctFromLeafValues = function(arr) {
  let result = 0;
  const traverse = list => {
    // console.log({ list });
    if (list.length <= 1) return;
    if (2 === list.length) {
      result += list[0] * list[1];
      return;
    }

    let max = list[0], maxIndex = 0, secondMax = Number.MIN_SAFE_INTEGER, secondMaxIndex;

    for (let i = 0; i < list.length; i++) {
      if (list[i] > max) {
        secondMaxIndex = maxIndex;
        secondMax = max;

        maxIndex = i;
        max = list[i];
      } else if (list [i] > secondMax && i !== maxIndex) {
        secondMax = list[i];
        secondMaxIndex = i;
      }
    }

    // console.log({ max, secondMax });
    result += max * secondMax;

    if (secondMaxIndex === undefined) {
      traverse(list.slice(1));
    } else {
      if (secondMaxIndex < maxIndex) {
        traverse(list.slice(0, maxIndex));
        traverse(list.slice(maxIndex));
      } else {
        traverse(list.slice(0, maxIndex + 1));
        traverse(list.slice(maxIndex + 1));
      }
    }
  };
  traverse(arr);
  return result;
};

it('minimum-cost-tree-from-leaf-values', () => {
  expect(mctFromLeafValues([6,2,4])).to.eq(32);
  expect(mctFromLeafValues([7,12,8,10])).to.eq(284);
  expect(mctFromLeafValues([15,13,5,3,15])).to.eq(500);
});