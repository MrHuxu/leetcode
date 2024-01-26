function minEatingSpeed(piles: number[], h: number): number {
    const [sum, maxPile] = piles.reduce((pre, curr) => ([
        pre[0] + curr, Math.max(pre[1] + curr)
    ]), [0, piles[0]]);

    let left = Math.floor(sum / h);
    let right = Math.ceil(maxPile / (Math.floor(h / piles.length)));
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const tmpH = piles.reduce((pre, curr) => pre + Math.ceil(curr / mid), 0);
        if (tmpH <= h) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return right;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
console.log(minEatingSpeed([1000000000, 1000000000], 3));