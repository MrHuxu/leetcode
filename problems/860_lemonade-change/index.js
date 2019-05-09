/**
 * @param {number[]} bills
 * @return {boolean}
 */
let lemonadeChange = function(bills) {
  const keep = {};

  const checkBill = b => {
    if (5 === b) {
      keep[5] = keep[5] ? keep[5] + 1 : 1;
      return true;
    }
    
    let sub = b - 5;
    while (sub !== 0) {
      if (sub >= 10) {
        if (keep[10] && keep[10] > 0) {
          keep[10]--;
          sub -= 10;
          continue;
        }
      }

      if (keep[5] && keep[5] > 0) {
        keep[5]--;
        sub -= 5;
        continue;
      }

      return false;
    }

    keep[b] = keep[b] ? keep[b] + 1 : 1;
    return true;
  };

  for (let bill of bills) {
    if (!checkBill(bill)) return false;
  }
  return true;
};

module.exports = lemonadeChange;