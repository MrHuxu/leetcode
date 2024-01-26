function addBinary(a: string, b: string): string {
    const charCode0 = '0'.charCodeAt(0);
    const l = a.length > b.length ? a.length : b.length;
    const sum: string[] = Array(l);
    let carry = 0;
    for (let i = 0; i < l; i++) {
        if (i < a.length) carry += a[a.length - 1 - i].charCodeAt(0) - charCode0;
        if (i < b.length) carry += b[b.length - 1 - i].charCodeAt(0) - charCode0;

        sum[l - 1 - i] = String.fromCharCode(carry % 2 + charCode0);
        carry = Math.floor(carry / 2);
    }

    const res = sum.join('');
    return carry > 0 ? '1' + res : res;
};

test('67', () => {
    expect(addBinary('11', '1')).toBe('100');
    expect(addBinary('0', '1')).toBe('1');
    expect(addBinary('1010', '1011')).toBe('10101');
});