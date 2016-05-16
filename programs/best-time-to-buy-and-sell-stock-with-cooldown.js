var maxProfit = function(prices) {
  if (prices.length <= 1) return 0;
  var total = 0, buy;
  
  for (var i = 1, len = prices.length; i < len; ++i) {
    if (prices[i] >= buy) {
      if (prices[i + 1] !== undefined) {
        if (prices[i + 1] >= prices[i]) {
          total += prices[i] - buy;
          buy = prices[i];
        } else {
          if (prices[i + 2] && prices[i + 2] - prices[i + 1] >= prices[i] - prices[i - 1])
            buy = prices[i - 1];
        }
      } else {
        total += prices[i] - buy;
        buy = prices[i];
      }
    } else {
      buy = prices[i];
    }
  }
  
  return total;
};

console.log(maxProfit([1, 2, 3, 0, 2]));
console.log(maxProfit([6,1,3,2,4,7]));