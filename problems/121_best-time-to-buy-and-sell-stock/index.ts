function maxProfit(prices: number[]): number {
    let res = 0;
    let minPrice = Number.MAX_SAFE_INTEGER;
    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        res = price >= minPrice ? Math.max(res, price - minPrice) : res;
    }
    return res;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));