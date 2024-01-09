/**
 * @param {string} S
 * @return {number}
 */
let minFlipsMonoIncr = function(S) {
  let i = 0, parsed = [];
  while ('0' === S[i]) i++;
  for (; i < S.length; i++) {
    if (parsed.length > 0 && S[i] === parsed[parsed.length - 1].ch) parsed[parsed.length - 1].count++;
    else parsed.push({ ch: S[i], count: 1 });
  }

  let min = S.length;
  const traverse = (i, sum, to1) => {
    if (sum >= min) return;

    if (i >= parsed.length) {
      min = Math.min(min, sum);
      return;
    }
    
    if (!to1) traverse(i + 2, sum + parsed[i].count, false);
    traverse(i + 2, sum + (parsed[i + 1] ? parsed[i + 1].count : 0), true);
  };
  traverse(0, 0, false);

  return min;
};