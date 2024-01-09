const { expect } = require('chai');

/**
 * @param {number[]} A
 * @return {number}
 */
let longestArithSeqLength = function(A) {
  let result = 0;
  let stat = [{}];
  for (let i = 1; i < A.length; i++) {
    const tmp = {};
    for (let j = 0; j < i; j++) {
      const cnt = stat[j][A[i] - A[j]] === undefined ? 2 : stat[j][A[i] - A[j]] + 1;
      result = Math.max(result, cnt);
      tmp[A[i] - A[j]] = cnt;
    }
    stat.push(tmp);
  }

  return result;
};

describe('', () => {
  it('longest-arithmetic-sequence', () => {
    expect(longestArithSeqLength([3, 6, 9, 12])).to.eq(4);
    expect(longestArithSeqLength([9,4,7,2,10])).to.eq(3);
    expect(longestArithSeqLength([20,1,15,3,10,5,8])).to.eq(4);
    expect(longestArithSeqLength([22,8,57,41,36,46,42,28,42,14,9,43,27,51,0,0,38,50,31,60,29,31,20,23,37,53,27,1,47,42,28,31,10,35,39,12,15,6,35,31,45,21,30,19,5,5,4,18,38,51,10,7,20,38,28,53,15,55,60,56,43,48,34,53,54,55,14,9,56,52])).to.eq(6);
  });
});