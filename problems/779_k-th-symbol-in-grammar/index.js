/**
 * Problem: https://leetcode.com/problems/k-th-symbol-in-grammar/description/
 */

const kThSymbolInGrammar = (N, K) => {
  const traverse = i => {
    if (1 === i) {
      return 0;
    } else {
      if (0 === i % 2) {
        return traverse(i / 2) ^ 1;
      } else {
        return traverse((i + 1) / 2);
      }
    }
  };
  return traverse(K);
};

module.exports = kThSymbolInGrammar;
