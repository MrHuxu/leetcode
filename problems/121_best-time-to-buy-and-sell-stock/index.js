/**
 * Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var minBuy = prices[0], maxSell = 0;

  for (var i = 1, l = prices.length; i < l; ++i) {
    if (prices[i] > minBuy) {
      maxSell = Math.max(maxSell, prices[i] - minBuy);
    } else if (prices[i] < minBuy) {
      minBuy = prices[i];
    }
  }

  return maxSell;
};
module.exports = maxProfit;
