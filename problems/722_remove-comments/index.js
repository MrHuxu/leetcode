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

  return source.reduce((result, line) => {
    let matchIndex;

    if (!isCommenting) {
      matchIndex = line.search(reSingle);
      if (matchIndex > 0) {
        result.push(line.split('').slice(0, matchIndex).join(''));
        return result;
      }

      matchIndex = line.search(reMulStart);
      if (matchIndex > 0) {
        const endIndex = line.search(reMulEnd);

        console.log({ matchIndex, endIndex });
        if (endIndex !== -1) {
          const arr = line.split('');
          const unComment = [...arr.slice(0, matchIndex), ...arr.slice(endIndex + 2)];
          if (unComment.length) result.push(unComment.join(''));
        } else {
          isCommenting = true;
          unfinishedLine = line.split('').slice(0, matchIndex).join('');
        }
        return result;
      }

      result.push(line);
      return result;
    } else {
      matchIndex = line.search(reMulEnd);
      if (matchIndex > 0) {
        isCommenting = false;
        unfinishedLine += line.split('').slice(matchIndex + 2).join('');
        if (unfinishedLine.length) result.push(unfinishedLine);
        unfinishedLine = '';

        return result;
      }

      return result;
    }
  }, []);
};

module.exports = removeComments;
