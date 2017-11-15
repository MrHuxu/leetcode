/**
 * Problem: https://leetcode.com/problems/remove-comments/description/
 */
/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
  const reSingle = /\/\/.*/;
  const reMulStart = /\/\*.*/;
  const reMulEnd = /\*\/.*/;
  let isCommenting = false;
  let unfinishedLine = '';
  const result = [];

  for (let i = 0; i < source.length; ) {
    const line = source[i];
    if (!isCommenting) {
      const singleIndex = line.search(reSingle);
      const multiIndex = line.search(reMulStart);

      if (singleIndex !== -1 && (singleIndex < multiIndex || -1 === multiIndex)) {
        const arr = line.split('');
        if (singleIndex) result.push(arr.slice(0, singleIndex).join(''));
        i++;
        continue;
      }

      if (multiIndex !== -1 && (multiIndex < singleIndex || -1 === singleIndex)) {
        const arr = line.split('');
        const endIndex = arr.slice(multiIndex + 2).join('').search(reMulEnd);

        if (endIndex !== -1) {
          const unComment = [...arr.slice(0, multiIndex), ...arr.slice(endIndex + 4 + multiIndex)];
          if (unComment.length) source[i] = unComment.join('');
          else i++;
          continue;
        } else {
          isCommenting = true;
          unfinishedLine = arr.slice(0, multiIndex).join('');
          i++;
          continue;
        }
      }

      i++;
      if (line.length) result.push(line);
    } else {
      const matchIndex = line.search(reMulEnd);
      if (matchIndex != -1) {
        isCommenting = false;
        unfinishedLine += line.split('').slice(matchIndex + 2).join('');
        if (unfinishedLine.length) source[i] = unfinishedLine;
        else i++;
        unfinishedLine = '';
        continue;
      }

      i++;
    }
  }

  return result;
};

module.exports = removeComments;
