const pairs: { [key: string]: string } = {
    ')': '(',
    ']': '[',
    '}': '{'
};

function isValid(s: string): boolean {
    const stack: Array<string> = [];
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (pairs[ch] && stack.length && stack[stack.length - 1] === pairs[ch]) {
            stack.pop();
            continue;
        }
        stack.push(ch);
    }
    return !stack.length;
};

test('20', () => {
    expect(isValid('()')).toBeTruthy();
    expect(isValid('()[]{}')).toBeTruthy();
    expect(isValid('(]')).toBeFalsy();
})