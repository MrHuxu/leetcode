/**
 * @param {string[]} logs
 * @return {string[]}
 */
let reorderLogFiles = function(logs) {
  const result = [];
  const letterLogs = [];

  for (let log of logs) {
    let words = log.split(' ');
    if (words[1][0].charCodeAt() >= 48 && words[1][0].charCodeAt() <= 57) result.push(log);
    else letterLogs.push([words[0], words.slice(1).join(' ')]);
  }

  letterLogs.sort((log1, log2) => log1[1] < log2[1] ? -1 : 1);
  result.unshift(...letterLogs.map(log => log.join(' ')));

  return result;
};

console.log(reorderLogFiles(['a1 9 2 3 1','g1 act car','zo4 4 7','ab1 off key dog','a8 act zoo']));