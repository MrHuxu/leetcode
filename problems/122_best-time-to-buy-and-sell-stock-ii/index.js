/**
 * Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var maxSell = minBuy = prices[0];
  var result = 0;
  for (var i = 1, l = prices.length; i < l; ++i) {
    if (maxSell === undefined && prices[i] < minBuy) {
      minBuy = prices[i];
    } else if (prices[i] < maxSell) {
      result += maxSell - minBuy;
      minBuy = prices[i];
      maxSell = undefined;
    } else if ((maxSell === undefined && prices[i] > minBuy) || prices[i] > maxSell) {
      maxSell = prices[i];
    }
  }
  if (maxSell > minBuy) result += maxSell - minBuy;

  return result;
};
module.exports = maxProfit;
