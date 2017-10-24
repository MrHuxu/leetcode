/**
 * Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/description/
 */
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  let result = 0, minBuy = prices[0], maxSell = null;

  for (let price of prices) {
    if (maxSell !== null && maxSell - price >= fee) {
      result += (maxSell - minBuy >= fee) ? maxSell - minBuy - fee : 0;
      minBuy = price;
      maxSell = null;
    } else if (price <= minBuy) {
      minBuy = price;
      maxSell = null;
    } else if (null === maxSell || (maxSell !== null && price >= maxSell)) {
      maxSell = price;
    } 
  }
  result += (maxSell !== null && maxSell - minBuy >= fee) ? maxSell - minBuy - fee : 0;

  return result;
};

module.exports = maxProfit;
