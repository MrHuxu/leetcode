/**
 * @param {string[]} emails
 * @return {number}
 */
let numUniqueEmails = emails => Object.keys(emails.reduce((pre, curr) => {
  let [local, domain] = curr.split('@');
  local = local.split('+')[0].replace(/\./g, '');
    
  pre[`${local}@${domain}`] = true;
  return pre;
}, {})).length;

console.log(numUniqueEmails(['test.email+alex@leetcode.com','test.e.mail+bob.cathy@leetcode.com','testemail+david@lee.tcode.com']));