const { expect } = require('chai');

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
let minimumSwap = function(s1, s2) {
  let result = 0;
  let xtoy = 0;
  let ytox = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      continue;
    }

    if ('x' === s1[i] && 'y' === s2[i]) {
      if (0 === xtoy) xtoy++;
      else {
        xtoy--;
        result++;
      }
    } else {
      if (0 === ytox) ytox++;
      else {
        ytox--;
        result++;
      }
    }
  }

  if ((xtoy + ytox) % 2 != 0 ) {
    return -1;
  }
  return result + xtoy + ytox;
};

it('minimum-swaps-to-make-strings-equal', () => {
  expect(minimumSwap('xx', 'yy')).to.eq(1);
  expect(minimumSwap('xy', 'yx')).to.eq(2);
  expect(minimumSwap('xx', 'xy')).to.eq(-1);
  expect(minimumSwap('xxyyxyxyxx', 'xyyxyxxxyx')).to.eq(4);
  expect(minimumSwap('xyxyy', 'xxyyy')).to.eq(2);
});