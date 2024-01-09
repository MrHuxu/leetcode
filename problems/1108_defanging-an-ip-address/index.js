const { expect } = require('chai');

/**
 * @param {string} address
 * @return {string}
 */
let defangIPaddr = function(address) {
  return address.replace(/\./g, '[.]');
};

it('defanging-an-ip-address', () => {
  expect(defangIPaddr('255.100.50.0')).to.eq('255[.]100[.]50[.]0');
});