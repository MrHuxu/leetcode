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

console.log(maxProfit([1, 2, 3, 5, 1]));