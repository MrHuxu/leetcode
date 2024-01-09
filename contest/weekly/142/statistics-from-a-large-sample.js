const { expect } = require('chai');

/**
 * @param {number[]} count
 * @return {number[]}
 */
let sampleStats = function(count) {
  let min, max, sum = 0, cnt = 0, mode, maxI = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < count.length; i++) {
    if (count[i]) {
      if (min === undefined) min = i;
      max = i;

      cnt += count[i];
      sum += i * count[i];

      if (count[i] > maxI) {
        mode = i;
        maxI = count[i];
      }
    }
  }

  let mid;
  let tmpCnt = 0;
  if (cnt % 2) {
    const midIdx = (cnt + 1) / 2;
    for (let i = 0; i < count.length; i++) {
      if (count[i]) {
        if (tmpCnt <= midIdx && tmpCnt + count[i] >= midIdx) {
          mid = i;
          break;
        }
        tmpCnt += count[i];
      }
    }
  } else {
    const smIdx = cnt / 2;
    const lgIdx = smIdx + 1;
    let smaller, larger;

    for (let i = 0; i < count.length; i++) {
      if (count[i]) {
        if (tmpCnt <= smIdx && tmpCnt + count[i] >= smIdx && smaller === undefined) {
          smaller = i;
        }
        if (tmpCnt <= lgIdx && tmpCnt + count[i] >= lgIdx) {
          larger = i;

          mid = (smaller + larger) / 2;
          break;
        }
        tmpCnt += count[i];
      }
    }
  }

  return [min, max, parseFloat((sum / cnt).toFixed(5)), parseFloat(mid.toFixed(5)), mode];
};

it('statistics-from-a-large-sample', () => {
  expect(sampleStats([0,1,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])).to.deep.eq([1.00000,3.00000,2.37500,2.50000,3.00000]);
  expect(sampleStats([0,4,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])).to.deep.eq([1.00000,4.00000,2.18182,2.00000,1.00000]);
});