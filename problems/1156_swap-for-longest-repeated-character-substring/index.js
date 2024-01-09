const { expect } = require('chai');

/**
 * @param {string} text
 * @return {number}
 */
let maxRepOpt1 = function(text) {
  const total = {};
  const maxSub = {};

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    total[ch] = total[ch] ? total[ch] + 1 : 1;

    if (ch === text[i - 1] && ch === text[i + 1]) continue;
    else {
      let preCh, preLen = 0, nexCh, nexLen = 0;

      if (text[i - 1] !== undefined) {
        preCh = text[i - 1];
        preLen = 1;
        for (let j = i - 2; j >= 0; j--) {
          if (preCh === text[j]) preLen++;
          else break;
        }
      }
      if (text[i + 1] !== undefined) {
        nexCh = text[i + 1];
        nexLen = 1;
        for (let j = i + 2; j < text.length; j++) {
          if (nexCh === text[j]) nexLen++;
          else break;
        }
      }

      if (preCh === nexCh && preCh !== undefined) {
        maxSub[preCh] = maxSub[preCh] ? (Math.max(maxSub[preCh], preLen + nexLen)) : (preLen + nexLen);
      } else {
        if (preCh !== undefined) {
          maxSub[preCh] = maxSub[preCh] ? (Math.max(maxSub[preCh], preLen)) : preLen;
        }
        if (nexCh !== undefined) {
          maxSub[nexCh] = maxSub[nexCh] ? (Math.max(maxSub[nexCh], nexLen)) : nexLen;
        }
      }
    }
  }

  let result = 1;
  for (let k in total) {
    if (total[k] > maxSub[k]) result = Math.max(result, maxSub[k] + 1);
    else if (maxSub [k] >= total[k]) result = Math.max(result, total[k]);
    else if (total[k] === text.length) result = text.length;
  }
  return result;
};

it ('swap-for-maximum-repeated-substring', () => {
  expect(maxRepOpt1('ababa')).to.eq(3);
  expect(maxRepOpt1('aaabaaa')).to.eq(6);
  expect(maxRepOpt1('aaabbaaa')).to.eq(4);
  expect(maxRepOpt1('abcdef')).to.eq(1);
});