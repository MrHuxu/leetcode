function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let cnt = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i]) continue;
        if ((i > 0 && flowerbed[i - 1])
            || (i < flowerbed.length - 1 && flowerbed[i + 1])) continue;

        flowerbed[i] = 1;
        cnt++;
        if (cnt >= n) return true;
    }
    return cnt >= n;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));