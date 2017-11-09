/**
 * Problem: https://leetcode.com/problems/accounts-merge/description/
 */
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = accounts => accounts.reduce((pre, account) => {
  const next = [];

  let emails = {};
  for (let person of pre) {
    let used = false;
    for (let email of account.slice(1)) {
      if (person.emails[email]) {
        used = true;
        emails = { ...emails, ...person.emails };
        break;
      }
    }
    if (!used) next.push(person);
  }

  next.push({
    name: account[0],
    emails: { ...emails, ...account.slice(1).reduce((pre, email) => {
      pre[email] = true;
      return pre;
    }, {}) }
  });

  return next;
}, []).map(person => [person.name, ...Object.keys(person.emails).sort()]);

module.exports = accountsMerge;
