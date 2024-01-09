const { expect } = require('chai');

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
let duplicateZeros = function(arr) {
  const queue = [];
  for (let i = 0; i < arr.length; ++i) {
    const ele = arr[i];

    if (0 === ele) queue.push(0, 0);
    else queue.push(ele);

    arr[i] = queue.shift();
  }
};

it('duplicate-zeros', () => {
  const arr1 = [1,0,2,3,0,4,5,0];
  duplicateZeros(arr1);
  expect(arr1).to.deep.eq([1, 0, 0, 2, 3, 0, 0, 4]);

  const arr2 = [1, 2, 3];
  duplicateZeros(arr2);
  expect(arr2).to.deep.eq([1, 2, 3]);
});