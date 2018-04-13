/**
 * Problem: https://leetcode.com/problems/subdomain-visit-count/description/
 */

const subdomainVisitCount = input => {
  const result = {};

  for (let record of input) {
    let [count, domain] = record.split(' ');
    count = parseInt(count);

    let str = '';
    for (let i = domain.length - 1; i >= 0; i--) {
      if ('.' === domain[i]) {
        result[str] = result[str] ? result[str] + count : count;
      }
      str = domain[i] + str;
    }
    result[str] = result[str] ? result[str] + count : count;
  }

  return Object.keys(result).map(domain => `${result[domain]} ${domain}`);
};

module.exports = subdomainVisitCount;
