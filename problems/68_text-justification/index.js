/**
 * Problem: https://leetcode.com/problems/text-justification/description/
 */
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  const result = [];

  for (let i = 0; i < words.length;) {
    let num = 0, len = 0;
    while (i + num < words.length && words[i + num].length + len <= maxWidth - num) {
      len += words[i + num].length;
      ++num;
    }

    let tmp = words[i];
    for (let j = 1; j < num; ++j) {
      if (i + num >= words.length)
        tmp += ' ';
      else {
        for (let k = 0; k < parseInt((maxWidth - len) / (num - 1)) + (j <= (maxWidth - len) % (num - 1) ? 1 : 0); ++k) tmp += ' ';
      }
      tmp += words[i + j];
    }

    let extraSpaceCount = maxWidth - tmp.length;
    for (let k = 0; k < extraSpaceCount; ++k) tmp += ' ';
    result.push(tmp);
    i += num;
  }

  return result;
};

