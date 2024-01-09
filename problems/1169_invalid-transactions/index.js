const { expect } = require('chai');

/**
 * @param {string[]} transactions
 * @return {string[]}
 */
let invalidTransactions = function(transactions) {
  const record = {}; // map[name]map[city][]int{time, seq}

  const result = {};
  for (let i = 0; i < transactions.length; i++) {
    const arr = transactions[i].split(',');
    const name = arr[0];
    const time = parseInt(arr[1]);
    const amount = parseInt(arr[2]);
    const city = arr[3];

    
    if (record[name]) {
      for (let c in record[name]) {
        if (c !== city) {
          for (let item of record[name][c]) {
            if (Math.abs(item[0] - time) <= 60) {
              result[item[1]] = true;
              result[i] = true;
            }
          }
        }
      }
    } 
    if (amount > 1000) {
      result[i] = true;
    }

    if (record[name] === undefined) {
      record[name] = { [city]: [[time, i]] };
    } else {
      if (record[name][city] === undefined) {
        record[name][city] = [[time, i]];
      } else {
        record[name][city].push([time, i]);
      }
    }
  }

  return Object.keys(result).map(k => transactions[parseInt(k)]);
};

it('invalid-transactions', () => {
  expect(invalidTransactions(['alice,20,800,mtv','alice,50,100,beijing'])).to.deep.eq(['alice,20,800,mtv','alice,50,100,beijing']);
  expect(invalidTransactions(['alice,20,800,mtv','alice,50,1200,mtv'])).to.deep.eq(['alice,50,1200,mtv']);
  expect(invalidTransactions(['alice,20,800,mtv','bob,50,1200,mtv'])).to.deep.eq(['bob,50,1200,mtv']);
  expect(invalidTransactions(['bob,627,1973,amsterdam','alex,387,885,bangkok','alex,355,1029,barcelona','alex,587,402,bangkok','chalicefy,973,830,barcelona','alex,932,86,bangkok','bob,188,989,amsterdam'])).to.deep.eq(['bob,627,1973,amsterdam','alex,387,885,bangkok','alex,355,1029,barcelona']);
  expect(invalidTransactions(['xnova,261,1949,chicago','bob,206,1284,chicago','xnova,420,996,bangkok','chalicefy,704,1269,chicago','iris,124,329,bangkok','xnova,791,700,amsterdam','chalicefy,572,697,budapest','chalicefy,231,310,chicago','chalicefy,763,857,chicago','maybe,837,198,amsterdam','lee,99,940,bangkok','bob,132,1219,barcelona','lee,69,857,barcelona','lee,607,275,budapest','chalicefy,709,1171,amsterdam'])).to.deep.eq(['xnova,261,1949,chicago','bob,206,1284,chicago','chalicefy,704,1269,chicago','chalicefy,763,857,chicago','lee,99,940,bangkok','bob,132,1219,barcelona','lee,69,857,barcelona','chalicefy,709,1171,amsterdam']);
});