function zeroFilledSubarray(nums: number[]): number {
    let res = 0;
    let startIdx = -1;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!num) {
            if (startIdx === -1) {

                startIdx = i;
            }
            continue;
        }

        if (startIdx === -1) {
            continue;
        }

        const cnt = i - startIdx;
        res += (1 + cnt) * cnt / 2;
        startIdx = -1;
    }
    if (startIdx !== -1) {
        const cnt = nums.length - startIdx;
        res += (1 + cnt) * cnt / 2;
    }
    return res;
};

console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4]));
console.log(zeroFilledSubarray([0, 0, 0, 2, 0, 0]));
console.log(zeroFilledSubarray([2, 10, 2019]));