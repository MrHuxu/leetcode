const { expect } = require('chai');

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
let rearrangeBarcodes = function(barcodes) {
  if (barcodes.length <= 1) return barcodes;

  barcodes.sort((a, b) => a > b ? 1 : -1);
  const result = [];
  if (1 === barcodes.length % 2) result.push(barcodes[parseInt(barcodes.length / 2)]);
  
  let start1 = 0, start2 = barcodes.length % 2 ? parseInt(barcodes.length / 2) + 1 : barcodes.length / 2;

  for (let i = 0; i < parseInt(barcodes.length / 2); i++) {
    if (result[result.length - 1] !== barcodes[start1]) {
      result.push(barcodes[start1++]);
      result.push(barcodes[start2++]);
    } else {
      result.push(barcodes[start2++]);
      result.push(barcodes[start1++]);
    }
  }
  return result;
};

it('distant-barcodes', () => {
  expect(rearrangeBarcodes([7,7,7,8,5,7,5,5,5,8])).to.deep.eq([ 5, 7, 5, 7, 5, 7, 5, 8, 7, 8 ]);
  expect(rearrangeBarcodes([3,7,3,7,7,7,7,2,2,2])).to.deep.eq([ 7, 3, 7, 3, 7, 2, 7, 2, 7, 2 ]);
  expect(rearrangeBarcodes([2,1,1])).to.deep.eq([1,2,1]);
  // expect(rearrangeBarcodes([1,1,1,2,2,2])).to.deep.eq([1,2,1,2,1,2]);
  // expect(rearrangeBarcodes([1,1,1,1,2,2,3,3])).to.deep.eq([ 1, 2, 1, 2, 1, 3, 1, 3 ]);
});