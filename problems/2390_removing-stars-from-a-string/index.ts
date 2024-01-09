function removeStars(s: string): string {
    const stack: Array<string> = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*' && stack.length) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
};