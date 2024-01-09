const { expect } = require('chai');

/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} num_wanted
 * @param {number} use_limit
 * @return {number}
 */
let largestValsFromLabels = function(values, labels, num_wanted, use_limit) {
  const valueLabels = {}, uniqValues = [];
  for (let i = 0; i < values.length; ++i) {
    if (valueLabels[values[i]] === undefined) {
      uniqValues.push(values[i]);
      valueLabels[values[i]] = [];
    }
    valueLabels[values[i]].push(labels[i]);
  }
  uniqValues.sort((a, b) => a > b ? -1 : 1);

  let result = 0;
  let num = 0, labelCnt = {};
  for (let v of uniqValues) {
    for (let l of valueLabels[v]) {
      if (labelCnt[l] === undefined) labelCnt[l] = 0;

      if (labelCnt[l] < use_limit) {
        result += v;
        labelCnt[l]++;
        num++;

        if (num === num_wanted) return result;
      }
    }
  }

  return result;
};

it('largest-values-from-labels', () => {
  expect(largestValsFromLabels([5,4,3,2,1], [1,1,2,2,3], 3, 1)).to.eq(9);
  expect(largestValsFromLabels([5,4,3,2,1], [1,3,3,3,2], 3, 2)).to.eq(12);
});