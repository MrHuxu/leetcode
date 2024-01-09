function addToArrayForm(num: number[], k: number): number[] {
    const num2 = convNumberToArray(k);
    let carry = 0;
    let length = Math.max(num.length, num2.length);
    let res = Array(length);
    for (let i = 0; i < length; i++) {
        if (i < num.length) carry += num[num.length - 1 - i];
        if (i < num2.length) carry += num2[num2.length - 1 - i];

        res[res.length - 1 - i] = carry % 10;
        carry = Math.floor(carry / 10);
    }

    return carry > 0 ? [carry, ...res] : res;
};

const convNumberToArray = (k: number): number[] => {
    if (k === 0) {
        return [];
    }

    return [...convNumberToArray(Math.floor(k / 10)), k % 10];
};

console.log(addToArrayForm([1, 2, 0, 0], 34));
console.log(addToArrayForm([2, 7, 4], 181));
console.log(addToArrayForm([2, 1, 5], 806));

/*
Example 1:

Input: num = [1,2,0,0], k = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234
Example 2:

Input: num = [2,7,4], k = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455
Example 3:

Input: num = [2,1,5], k = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021
*/