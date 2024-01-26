function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const stack: Array<number> = [];
    while (popped.length) {
        const top = popped.shift();
        while ((!stack.length || stack[stack.length - 1] !== top) && pushed.length) stack.push(pushed.shift()!);
        if (stack[stack.length - 1] === top) stack.pop();
    }
    return !stack.length;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));
